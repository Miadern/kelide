<template>
  <el-card class="box-card">
    <div class="hearder">
      <span style="display: flex">
        <span style="width: 100px" class="hight"
          ><slot name="one">工单编号:</slot></span
        >
        <el-input v-model="input" placeholder="请输入内容" clearable>
        </el-input>
      </span>

      <span style="display: flex; margin: 0 10px">
        <span class="hight"><slot name="two"> 工单编号: </slot></span>
        <el-select v-model="input2" filterable placeholder="请选择" clearable>
          <el-option
            v-for="item in status"
            :key="item.statusId"
            :label="item.statusName"
            :value="item.statusId"
          >
          </el-option>
        </el-select>
      </span>
      <myBtn bgc="rgb(95, 132, 255)" margin="0 0 0 10" @click.native="btnFn">
        <i class="el-icon-search"></i> 查询</myBtn
      >
    </div>
  </el-card>
</template>

<script>
import myBtn from '@/components/myBtn'
export default {
  name: 'inputHeader',
  props: {
    status: {
      type: Array,
      required: true,
    },
  },
  components: {
    myBtn,
  },
  data() {
    return {
      input: '',
      input2: '',
    }
  },
  methods: {
    btnFn() {
      this.$emit('onClick', this.input.trim(), this.input2)
    },
  },
}
</script>

<style scoped lang="less">
.box-card {
  margin-bottom: 30px;
}
.el-card {
  width: 95%;
}
.hearder {
  display: flex;
  font-size: 14px;
}
.hight {
  line-height: 40px;
}
</style>
