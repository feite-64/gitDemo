import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        //重定向
        target: 'http://localhost:3000', //要跳转的位置 ,拼接
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') //重写api，替换成空的
      }
    }
  }
})
