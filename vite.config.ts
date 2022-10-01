import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    open: true,
    // https: true,
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
