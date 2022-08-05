<template>
  <div>
    <!-- 头部搜索栏 -->
    <inputHeader :status="taskStatus">
      <template #one>工单编号:</template>
      <template #two>工单状态: </template>
    </inputHeader>
    <!-- 列表卡片 -->
    <myList
      :list="taskList"
      :total="totalCount"
      @loadPage="loadPageFn"
    ></myList>
  </div>
</template>

<script>
import inputHeader from '@/components/inputHeader'
import { getAllTaskStatus, getTaskList } from '@/api'
import myList from '@/components/myList'
export default {
  components: {
    inputHeader,
    myList,
  },
  data() {
    return {
      taskStatus: [],
      taskList: [],
      totalCount: 0,
      pageIndex: 1,
      pageSize: 10,
    }
  },

  created() {
    //获取状态列表
    this.getAllTaskStatus()
    //工单搜索
    this.getTaskList()
  },

  methods: {
    //获取状态列表
    async getAllTaskStatus() {
      const data = await getAllTaskStatus()
      this.taskStatus = data
    },
    //工单搜索
    async getTaskList() {
      const send = {
        pageIndex: 1,
        pageSize: 10,
        isRepair: false,
      }
      const data = await getTaskList(send)
      console.log(data)
      this.taskList = data.currentPageRecords
      this.totalCount = +data.totalCount
    },
    async loadPageFn() {
      this.pageIndex++
      const send = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        isRepair: false,
      }
      const data = await getTaskList(send)
      console.log(data)
      this.taskList = data.currentPageRecords
      this.totalCount = +data.totalCount
    },
  },
}
</script>

<style scoped lang="less"></style>
