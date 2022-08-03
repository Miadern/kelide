<template>
  <div :class="{ 'has-logo': showLogo }">
    <el-scrollbar style="height: 100%" wrap-style="overflow-x:hidden;">
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <i class="el-icon-house"></i>
          <span slot="title">帝可得</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"
            ><i class="el-icon-tickets"></i><span>工单管理</span></template
          >
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"
            ><i class="el-icon-map-location"></i><span>点位管理</span></template
          >
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"
            ><i class="el-icon-first-aid-kit"></i
            ><span>设备管理</span></template
          >
          <el-menu-item index="4-1">选项1</el-menu-item>
          <el-menu-item index="4-2">选项2</el-menu-item>
          <el-menu-item index="4-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"
            ><i class="el-icon-user"></i><span>人员管理</span></template
          >
          <el-menu-item index="5-1">选项1</el-menu-item>
          <el-menu-item index="5-2">选项2</el-menu-item>
          <el-menu-item index="5-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"
            ><i class="el-icon-table-lamp"></i><span>商品管理</span></template
          >
          <el-menu-item index="6-1">选项1</el-menu-item>
          <el-menu-item index="6-2">选项2</el-menu-item>
          <el-menu-item index="6-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="7">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">策略管理</span>
        </el-menu-item>
        <el-menu-item index="8">
          <i class="el-icon-document-copy"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="9">
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
