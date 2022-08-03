import router from '@/router'
import store from '@/store'
//设置没有token可以进去的白名单
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  //如果token存在
  if (token) {
    if (!store.state.user.userAll.userId) {
      store.dispatch('user/getUserInfo')
    }

    if (to.path === '/login') return next('/')
    next()
  } else {
    const flag = whiteList.includes(to.path)
    if (flag) return next()
    next('/login')
  }
})
