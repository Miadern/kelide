<template>
  <div class="bgcBox">
    <div class="box">
      <el-avatar :src="require('../../assets/logo.png')" class="avt" />
      <div class="from">
        <el-form
          ref="loginForm"
          :model="loginForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item prop="loginName">
            <el-input
              v-model="loginForm.loginName"
              class="input"
              placeholder="请输入内容"
              prefix-icon="el-icon-mobile-phone"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              :type="passwordType"
              v-model="loginForm.password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
            >
              <template #suffix>
                <!-- <i class="iconfont icon-biyanjing" /> -->
                <svg-icon
                  @click="eyeFn"
                  :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
                />
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code">
            <div style="display: flex">
              <el-input
                v-model="loginForm.code"
                placeholder="请输入验证码"
                prefix-icon="iconfont icon-dunpaibaoxianrenzheng_o"
                @keyup.enter.native="loginFn"
              />
              <div
                class="placeholdImg"
                v-if="codeImg.length === 0"
                @click="imgFn"
              >
                点击刷新验证码
              </div>
              <img
                style="height: 100%; cursor: pointer"
                :src="codeImg"
                alt=""
                v-else
                @click="imgFn"
              />
            </div>
          </el-form-item>
          <el-button type="primary" @click="loginFn">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode } from '@/api'
export default {
  data() {
    return {
      passwordType: 'password', //密码框类型
      loginForm: {
        //表单咯
        loginName: 'admin',
        password: 'admin',
        code: '', //验证码
      },
      rules: {
        loginName: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
      }, //表单规则
      radomNum: null, //验证码的随机数
      codeImg: '', //返回的验证码图片
    }
  },

  created() {
    this.getCode() //发送请求获取验证码
  },

  methods: {
    //点击眼睛显示密码
    eyeFn() {
      if (this.passwordType === 'password') {
        this.passwordType = 'text'
      } else {
        this.passwordType = 'password'
      }
    },
    //生成随机数
    radom(min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    //生成4位整数
    radomFour() {
      let num = ''
      num =
        num +
        this.radom(0, 9) +
        this.radom(0, 9) +
        this.radom(0, 9) +
        this.radom(0, 9)
      num = +num
      return num
    },
    //发送请求获取验证码
    async getCode() {
      this.radomNum = this.radomFour()
      const { data } = await getCode(this.radomNum)
      this.codeImg = URL.createObjectURL(data)
    },
    //点登录按钮之后登录！发送登录请求给vueX
    loginFn() {
      const login = {
        loginName: this.loginForm.loginName,
        password: this.loginForm.password,
        code: this.loginForm.code,
        clientToken: this.radomNum,
        loginType: 0,
      }
      this.$store.dispatch('user/login', login)
    },
    //点击图片更新验证码
    imgFn() {
      this.getCode() //发送请求获取验证码
    },
  },
}
</script>

<style scoped lang="less">
.bgcBox {
  position: relative;
  height: 100%;
  width: 100%;
  background: url('../../assets/background.png');
  background-size: cover;
  .box {
    padding: 76px 35px 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 518px;
    height: 388px;
    background-color: #fff;
    border-radius: 10px;
    .avt {
      position: absolute;
      width: 96px;
      height: 96px;
      background-color: unset;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
// :deep(.el-input__inner){
//     height: 300px;
//  }
.placeholdImg {
  width: 130px;
  height: 50px;
  border: 1px solid #ccc;
  cursor: pointer;
}
/deep/ .el-input__suffix {
  top: 6px;
}
/deep/ .el-form-item__content {
  margin-left: 0 !important;
}
/deep/ .el-input__inner {
  height: 50px;
}
/deep/ .el-input__icon {
  font-size: 20px;
  line-height: 47px;
}
// .el-input {
//   margin-bottom: 24px;
// }
.el-button--primary {
  width: 100%;
  height: 52px;
  background: linear-gradient(262deg, #2e50e1, #6878f0);
}
</style>
