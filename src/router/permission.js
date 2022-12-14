import router from './index'
// 获取vuex的数据
import store from '../store/index'
// 路由拦截
router.beforeEach((to, from, next) => {
  // 判断是否需要登录
  if (to.matched.some((ele) => ele.meta.isLogin)) {
    // 判断当前用户是否需要登录
    let token = store.state.loginModule.userinfo.token
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 不需要登录
    next()
  }
})
