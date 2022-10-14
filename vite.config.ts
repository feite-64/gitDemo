import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入相关import
import AutoImport from 'unplugin-auto-import/vite'
// 按需引入el
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      resolvers: [ElementPlusResolver()]
    }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  //绝对路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  //跨域
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
