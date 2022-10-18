import axios from 'axios'
// import { ElMessage } from 'element-plus'
const service = axios.create({
  // baseURL: 'https://api.inews.qq.com/newsqa',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
    // 'pc-token': '4a82b23dbbf3b23fd8aa291076e660ec' //后端提供
  }
})
service.interceptors.request.use((config) => {
  // config.headers = config.headers || {}
  // if (localStorage.getItem('token')) {
  //   config.headers.token = localStorage.getItem('token') || ''
  // }
  return config
})
service.interceptors.response.use(
  (res) => {
    const { status } = res
    if (status !== 200 && status !== 204) {
      console.error('错误')
      // ElMessage.error(message)
      return Promise.reject(res)
    }
    return Promise.resolve(res.data)
  },
  (err) => {
    console.log(err)
  }
)
export default service
