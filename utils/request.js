// axios 二次封装
import axios from 'axios'

// 利用axios对象的方法create,去创建一个axios实例
// request就是axios,配置替换了
const requests = axios.create({
  baseURL: '/api',
  timeout: 5000, // 5s请求超时
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到
requests.interceptors.request.use((config) => {
  // config:配置对象,对象里面有一个属性很重要，headers请求头
  return config
})

// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    //成功的回调函数：服务器响应数据回来后，响应拦截器可以检测到
    return res.data
  },
  (error) => {
    return Promise.reject(new Error('faile'))
  }
)
// 对外暴露
export default requests
