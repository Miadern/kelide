<template>
  <div class="bgcBox">
    <div class="box">
      <el-avatar
        :size="size"
        :src="require('../../assets/logo.png')"
        class="avt"
      />
      <div class="from">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-input
            v-model="user"
            class="input"
            placeholder="请输入内容"
            prefix-icon="el-icon-mobile-phone"
          />
          <el-input
            v-model="password"
            placeholder="请输入密码"
            show-password
            prefix-icon="el-icon-lock"
          >

            <template #suffix>
              <i class="iconfont icon-biyanjing" />
            </template>
          </el-input>
          <div style="display: flex;">
            <el-input
              v-model="code"
              placeholder="请输入验证码"
              prefix-icon="iconfont icon-dunpaibaoxianrenzheng_o"
            />
            <img style="height:100%" src="../../assets/GsfCvPGlu6oc5su5pjkzBsKapIujwOlJ.png" alt="">
          </div>
          <el-button type="primary">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: '',
      password: '',
      code: ''
    }
  },

  created() {},

  methods: {}
}
</script>

<style scoped lang="less" >
.bgcBox {
  position: relative;
  height: 100%;
  width: 100%;
  background: url("../../assets/background.png");
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
 /deep/ .el-input__inner{
          height: 47px;
        }
       /deep/  .el-input__icon{
          font-size: 20px;
          line-height: 47px;
        }
.el-input {

  margin-bottom: 24px;

}
.el-button--primary{
  width: 100%;
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
}

</style>
