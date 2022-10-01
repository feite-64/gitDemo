import axios from 'axios'
const server = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 5000
})
server.interceptors.request.use((req) => {
  req.headers = req.headers || {}
  if (localStorage.getItem('token')) {
    req.headers.token = localStorage.getItem('token') || ''
  }
})
server.interceptors.response.use((res) => {
  const { code, message } = res.data
  if (code !== 200 || code !== 204) {
    console.error(message)
  } else {
    console.log(message)
  }
})
