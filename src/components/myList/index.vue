<template>
  <el-card class="box-card">
    <div style="display: flex" class="btnB">
      <myBtn bgc="linear-gradient(135deg, #ff9743, #ff5e20)"
        ><i class="el-icon-circle-plus-outline"></i>新建</myBtn
      >
      <span class="marginright"></span>
      <myBtn bgc="#fbf4f0" color="#655b56"> 工单配置 </myBtn>
    </div>
    <el-table
      :data="list"
      style="width: 100%"
      :cell-style="{ padding: '10px 0' }"
      :header-cell-style="headerColor"
    >
      <el-table-column prop="taskId" label="序号" width="80">
        <template v-slot="scope">
          {{ scope.$index + 1 }}
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="total"
    >
    </el-pagination>
  </el-card>
</template>

<script>
import myBtn from '@/components/myBtn'
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
    }
  },

  created() {},

  methods: {
    //修改表头
    headerColor() {
      return 'background:rgb(243,246,251)'
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.$emit('loadPage')
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
