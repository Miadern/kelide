import { login } from '@/api'
import router from '@/router'
import { Message } from 'element-ui'
export default {
  namespaced: true,
  state: {
    token: '',
    userName: '',
  },
  mutations: {
    //设置token和username
    setToken(state, payload) {
      state.token = payload.token
      state.userName = payload.userName
    },
  },
  actions: {
    //发送登录接口请求
    async login(context, payload) {
      try {
        const res = await login(payload)
        if (res.data.success === false)
          return Message({
            showClose: true,
            message: res.data.msg,
            type: 'error',
          })
        context.commit('setToken', res.data)
        router.push({
          path: '/dashboard',
        })
      } catch (error) {
        console.log(error)
      }
    },
  },
}
