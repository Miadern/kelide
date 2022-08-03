import axios from 'axios'
import store from '@/store'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000,
})

service.interceptors.request.use(
  (config) => {
    const token = store.state.user.token
    if (token) {
      config.headers.Authorization = store.state.user.token
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  },
)

service.interceptors.response.use(
  (res) => {
    const { data } = res
    return data
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default service
