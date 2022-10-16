import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入常用import 如ref  reactive
import AutoImport from 'unplugin-auto-import/vite'
// 按需引入element-plus
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入pxtoviewport 用来px转vw
import pxtoViewPort from 'postcss-px-to-viewport'
// 引入原子化css
// 原子化  一个名字代表一个样式 进行拼接
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno } from 'unocss'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unoCss({
      // 预设
      // presetIcons 图标库
      // presetAttributify 以属性名的方式写样式
      // presetUno 工具类
      presets: [presetIcons(), presetAttributify(), presetUno()],
      //自定义类名
      rules: [
        ['flex', { display: 'flex' }],
        ['red', { color: 'red' }],
        [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d)}px` })]
      ],
      //组合自定义类名
      shortcuts: {
        cike: ['flex', 'red']
      }
    }),
    AutoImport({
      //自动引入src/auto-import.d.ts里的import
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      //自动引入element-plus
      resolvers: [ElementPlusResolver()]
    }),
    Components({ resolvers: [ElementPlusResolver()] })
  ],
  css: {
    postcss: {
      plugins: [
        pxtoViewPort({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false // 是否处理横屏情况
        })
      ]
    }
  },
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
