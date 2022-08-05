<template>
  <div class="navbar">
    <!-- 原来的模板 -->
    <div class="old">
      <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->
      <!-- <breadcrumb class="breadcrumb-container" /> -->
      <!-- <div class="right-menu">




      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar + '?imageView2/1/w/80/h/80'" class="user-avatar" />
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item> Home </el-dropdown-item>
          </router-link>
          <a
            target="_blank"
            href="https://github.com/PanJiaChen/vue-admin-template/"
          >
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a
            target="_blank"
            href="https://panjiachen.github.io/vue-element-admin-site/#/"
          >
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display: block">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
    </div>
    <h1 class="logo"><img src="@/assets/slogo.png" alt="" /></h1>
    <div class="navRight">
      <img
        :src="$store.state.user.userAll.image"
        alt=""
        style="width: 35px"
        v-cantLoadImg="defaultImg"
      />

      <div class="txt">欢迎您，{{ $store.state.user.userAll.userName }}</div>
      <el-tooltip
        class="item"
        effect="dark"
        content="退出登录"
        placement="bottom"
        @click.native="goLogin"
      >
        <div class="goOut">退出<span></span></div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
import defaultImg from '@/assets/logo.png'
export default {
  computed: {},
  bbq: {
    // components: {
    //   Breadcrumb,
    //   Hamburger,
    // },
    // computed: {
    //   ...mapGetters(['sidebar', 'avatar']),
    // },
    // methods: {
    //   toggleSideBar() {
    //     this.$store.dispatch('app/toggleSideBar')
    //   },
    //   async logout() {
    //     await this.$store.dispatch('user/logout')
    //     this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    //   },
    // },
  },
  data() {
    return {
      defaultImg,
    }
  },
  methods: {
    //退出登录按钮
    goLogin() {
      this.$store.commit('user/removeToken')
      this.$router.push({
        path: '/login',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  background-color: pink;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC');
  background-size: cover;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;

  .logo {
    width: 88px;
    height: 35px;
    margin: unset;
    margin-top: 8px;
    margin-left: 15px;
    img {
      width: 100%;
    }
  }
  .navRight {
    height: 100%;
    display: flex;
    position: absolute;
    align-items: center;
    right: 20px;
    top: 0;
    color: #fff;
    .goOut {
      margin-right: 35px;
      position: relative;
      span {
        position: absolute;
        top: 5px;
        right: -14px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-top-color: #fff;
      }
    }
    .txt {
      margin-left: 15px;
      margin-right: 30px;
    }
  }
  /*  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  } */
}
</style>
