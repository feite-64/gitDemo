import axios from 'axios'
const server = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'pc-token': '4a82b23dbbf3b23fd8aa291076e660ec' //后端提供
  },
  timeout: 5000
})
server.interceptors.request.use((config) => {
  config.headers = config.headers || {}
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token') || ''
  }
  return config
})
server.interceptors.response.use(
  (res) => {
    const { code, message } = res.data
    if (code !== 200 || code !== 204) {
      console.error(message)
    } else {
      console.log(message)
    }
  },
  (err) => {
    console.log(err)
  }
)
