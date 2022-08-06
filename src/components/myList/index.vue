<template>
  <el-card class="box-card">
    <div style="display: flex" class="btnB">
      <myBtn
        bgc="linear-gradient(135deg, #ff9743, #ff5e20)"
        @click.native="createVisible = true"
      >
        <i class="el-icon-circle-plus-outline"></i>新建</myBtn
      >
      <span class="marginright"></span>
      <myBtn bgc="#fbf4f0" color="#655b56" @click.native="alertValueFn">
        工单配置
      </myBtn>
    </div>
    <el-table
      :data="list"
      style="width: 100%"
      :cell-style="{ padding: '10px 0' }"
      :header-cell-style="headerColor"
    >
      <el-table-column prop="taskId" label="序号" width="80">
        <template v-slot="scope">
          {{ scope.$index + 1 + indexOne }}
        </template>
      </el-table-column>
      <el-table-column prop="taskCode" label="工单编号"> </el-table-column>
      <el-table-column prop="innerCode" label="设备编号"> </el-table-column>
      <el-table-column prop="typeId" label="工单类型">
        <template v-slot="scope">
          {{ scope.row.taskType.typeName }}
        </template>
      </el-table-column>
      <el-table-column prop="createType" label="工单方式">
        <template v-slot="scope">
          {{ scope.row.createType ? '手动' : '自动' }}
        </template>
      </el-table-column>
      <el-table-column prop="taskStatusTypeEntity" label="工单状态">
        <template v-slot="scope">
          {{ scope.row.taskStatusTypeEntity.statusName }}
        </template>
      </el-table-column>
      <el-table-column prop="userName" label="运营人员"> </el-table-column>
      <el-table-column prop="updateTime" label="创建日期" width="250">
      </el-table-column>
      <el-table-column prop="name" label="操作"
        ><a href="javascript:;">查看详情</a></el-table-column
      >
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="10"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
    <!-- 弹出对话框 -->
    <el-dialog title="工单配置" :visible.sync="dialogVisible" width="25%">
      补货警戒线：
      <el-input-number
        v-model="num"
        controls-position="right"
        :min="0"
        :max="100"
      ></el-input-number>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" class="popCanBtn"
          >取 消</el-button
        >
        <el-button type="primary" @click="dialogConf" class="popConBtn">
          确 定
        </el-button>
      </span>
    </el-dialog>
    <!-- 新建 -->
    <el-dialog title="工单配置" :visible.sync="createVisible" width="25%">
      123
      <span slot="footer" class="dialog-footer">
        <el-button @click="createVisible = false" class="popCanBtn"
          >取 消</el-button
        >
        <el-button type="primary" @click="createConf" class="popConBtn">
          确 定
        </el-button>
      </span>
    </el-dialog>
  </el-card>
</template>

<script>
import myBtn from '@/components/myBtn'
import { getAlertValue, setAlertValue } from '@/api'
export default {
  name: 'list',
  props: {
    list: {
      type: Array,
      required: true,
    },
    //总共多少条数据
    total: {
      type: Number,
      required: true,
    },
  },
  components: {
    myBtn,
  },
  data() {
    return {
      index: '0',
      currentPage1: 1,
      indexOne: 0,
      //弹出层
      dialogVisible: false,
      //新建的弹出层
      createVisible: false,
      //警戒数字
      num: 1,
    }
  },

  created() {},

  methods: {
    //点击新建弹出框确认按钮
    createConf() {
      this.createVisible = false
    },
    //点击弹出框确认
    async dialogConf() {
      this.dialogVisible = false
      await setAlertValue(this.num)
    },

    //点击工单配置按钮触发弹窗并发送请求
    async alertValueFn() {
      const data = await getAlertValue()
      this.dialogVisible = true
      this.num = data
    },
    //修改表头
    headerColor() {
      return 'background:rgb(243,246,251)'
    },
    //跳页时进行操作同步父组件
    handleCurrentChange(val) {
      this.indexOne = (val - 1) * 10
      this.$emit('loadPage', val)
    },
  },
}
</script>

<style scoped lang="less">
.el-card {
  width: 95%;
}
/deep/.el-table th > .cell {
  font-weight: 400;
  color: rgb(102, 102, 102);
  //   background: rgb(243, 246, 251);
}
.marginright {
  margin-right: 10px;
}
.btnB {
  margin-bottom: 10px;
}
</style>
<style>
.popConBtn {
  height: 36px;
  width: 80px;
  padding: 0;
  border: unset;
  background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
}
.popCanBtn {
  width: 80px !important;
  height: 36px;
  padding: 0;
  border: unset;
  background-color: #fbf4f0 !important;
}
</style>
