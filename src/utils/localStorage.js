import store from '../store/index'
// 持久化
let user = localStorage.getItem('user')
if (user) {
  // 转化为js对象
  user = JSON.parse(user)
  store.commit('loginModule/setUser', user)
}
