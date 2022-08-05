import { getUserInfo, login } from '@/api'
import { setTokenTime } from '@/utils/auth'

export default {
  namespaced: true,
  state: {
    token: '',
    userId: '',
    userAll: {},
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
      context.commit('setToken', res)
      //登录的时候储存一下时间戳
      setTokenTime()
    },

    //获取用户基本信息
    async getUserInfo(context, payload) {
      const data = await getUserInfo(context.state.userId)
      //头像如果不存在就改为1触发替换图片
      if (data.image === null) {
        data.image = 1
      }
      context.commit('setUserAll', data)
    },
  },
}
