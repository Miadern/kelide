<template>
  <div :class="{ 'has-logo': showLogo }">
    <el-scrollbar style="height: 100%" wrap-style="overflow-x:hidden;">
      <el-menu
        router
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="/home">
          <i class="el-icon-house"></i>
          <span slot="title">帝可得</span>
        </el-menu-item>
        <el-submenu index="">
          <template slot="title"
            ><i class="el-icon-tickets"></i><span>工单管理</span></template
          >
          <el-menu-item index="/task/operate">运营工单</el-menu-item>
          <el-menu-item index="/task/maintain">运维工单</el-menu-item>
        </el-submenu>
        <el-submenu index="">
          <template slot="title"
            ><i class="el-icon-map-location"></i><span>点位管理</span></template
          >
          <el-menu-item index="/node/area">区域管理</el-menu-item>
          <el-menu-item index="/node/point">点位管理</el-menu-item>
          <el-menu-item index="/node/partner">合作商管理</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"
            ><i class="el-icon-first-aid-kit"></i
            ><span>设备管理</span></template
          >
          <el-menu-item index="/vn/device">设备管理</el-menu-item>
          <el-menu-item index="/vn/deviceState">设备状态</el-menu-item>
          <el-menu-item index="/vn/deviceType">设备类型管理</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"
            ><i class="el-icon-user"></i><span>人员管理</span></template
          >
          <el-menu-item index="/user/personnel">人员列表</el-menu-item>
          <el-menu-item index="/user/census">人效统计</el-menu-item>
          <el-menu-item index="/user/workload">工作量列表</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"
            ><i class="el-icon-table-lamp"></i><span>商品管理</span></template
          >
          <el-menu-item index="/sku/commodityType">商品类型</el-menu-item>
          <el-menu-item index="/sku/commodityManage">商品管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="/policy">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">策略管理</span>
        </el-menu-item>
        <el-menu-item index="/order">
          <i class="el-icon-document-copy"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="/report">
          <i class="el-icon-collection"></i>
          <span slot="title">对账统计</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['sidebar']),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
  },
  methods: {
    //侧边栏
    handleOpen() {},
    handleClose() {},
  },
}
</script>
