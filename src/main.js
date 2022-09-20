import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/iconfont/iconfont.css'
// 全局引用api
import api from './utils/index'
Vue.prototype.$api = api
Vue.config.productionTip = false
// 引入i18n
import i18n from './lang/index'
// 路由跳转允许
import './router/permission'
import './utils/localStorage'

Vue.use(ElementUI)
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')
