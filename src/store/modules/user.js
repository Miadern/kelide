import { getUserInfo, login } from '@/api'
import router from '@/router'
import { Message } from 'element-ui'
export default {
  namespaced: true,
  state: {
    token: '',
    userId: '',
    userAll: '',
  },
  mutations: {
    //设置token和username
    setToken(state, payload) {
      state.token = payload.token
      state.userId = payload.userId
    },
    //清除token
    removeToken(state) {
      state.token = ''
      state.userId = ''
    },
    //设置个人详细信息
    setUserAll(state, payload) {
      state.userAll = payload
    },
  },
  actions: {
    //发送登录接口请求
    async login(context, payload) {
      const res = await login(payload)
      if (res.success === false)
        return Message({
          showClose: true,
          message: res.msg,
          type: 'error',
        })
      context.commit('setToken', res)
      router.push({
        path: '/dashboard',
      })
    },

    //获取用户基本信息
    async getUserInfo(context, payload) {
      const data = await getUserInfo(context.state.userId)
      context.commit('setUserAll', data)
    },
  },
}
