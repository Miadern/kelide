import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getTokenTime } from './auth'
import router from '@/router'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
})

const isTokenTimeout = () => {
  const oldTime = getTokenTime()
  const newTime = Date.now()
  const TokenTimeout = 2 * 60 * 60 * 1000 //设定超时的时间
  return newTime - oldTime > TokenTimeout //返回的是是否大于超时时间的结果
}
//请求拦截器
service.interceptors.request.use((config) => {
  const token = store.state.user.token
  if (token) {
    //如果token存在，还需要去判断一下token是否超时
    //如果新时间戳-老时间戳>超时时间，那么将超时，所以跳回login界面清除token
    if (isTokenTimeout()) {
      store.commit('user/removeToken')
      router.push('/login')
      return Promise.reject(new Error('登陆超时'))
    } else {
      config.headers.Authorization = store.state.user.token
    }
  }
  //不存在token就正常跳转
  return config
})

//响应拦截器
service.interceptors.response.use(
  (res) => {
    const { data } = res
    if (data.success === false) {
      Message.error(data.msg)
      return Promise.reject(new Error(data.msg))
    }
    return data
  },
  (err) => {
    console.dir(err)
    if (err?.response?.status === 401) {
      Message.error('登陆超时')
      store.commit('user/removeToken')
      router.push('/login')
    } else {
      Message.error(err.message)
    }

    return Promise.reject(err)
  },
)

export default service
