import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 自动引入常用import 如ref  reactive
import AutoImport from 'unplugin-auto-import/vite'
// 按需引入element-plus
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//引入pxtoviewport 用来px转vw
// import pxtoViewPort from 'postcss-px-to-viewport'
// 引入原子化css
// 原子化  一个名字代表一个样式 进行拼接
import unoCss from 'unocss/vite'
// presetIcons 图标库
// presetAttributify 以属性名的方式写样式
// presetUno 工具类
import { presetIcons, presetAttributify, presetUno } from 'unocss'
//PWA离线存储技术
import { VitePWA } from 'vite-plugin-pwa'
//代码占用分析
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    //原子化css
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
    //自动导入i
    AutoImport({
      //自动引入src/auto-import.d.ts里的import
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
      //自动引入element-plus
      resolvers: [ElementPlusResolver()]
    }),
    //按需引入elementplus
    Components({ resolvers: [ElementPlusResolver()] }),
    // 数据内存可视化
    visualizer({ open: true }),
    //离线缓存
    VitePWA({
      workbox: {
        cacheId: 'XIaoman', //缓存名称
        runtimeCaching: [
          {
            urlPattern: /.*\.js.*/, //缓存文件
            handler: 'StaleWhileRevalidate', //重新验证时失效
            options: {
              cacheName: 'XiaoMan-js', //缓存js，名称
              expiration: {
                maxEntries: 30, //缓存文件数量 LRU算法
                maxAgeSeconds: 30 * 24 * 60 * 60 //缓存有效期
              }
            }
          }
        ]
      }
    })
  ],
  //px-to-vw配置
  // css: {
  //   postcss: {
  //     plugins: [
  //       pxtoViewPort({
  //         unitToConvert: 'px', // 要转化的单位
  //         viewportWidth: 750, // UI设计稿的宽度
  //         unitPrecision: 6, // 转换后的精度，即小数点位数
  //         propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
  //         viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
  //         fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
  //         selectorBlackList: ['ignore-'], // 指定不转换为视窗单位的类名，
  //         minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
  //         mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
  //         replace: true, // 是否转换后直接更换属性值
  //         landscape: false // 是否处理横屏情况
  //       })
  //     ]
  //   }
  // },
  //路径别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  // vite 优化
  build: {
    chunkSizeWarningLimit: 2000, // chunk大小警告限制2000
    cssCodeSplit: true, //css 拆分
    sourcemap: false, //不生成sourcemap
    minify: false, //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
    assetsInlineLimit: 5000 //小于该值 图片将打包成Base64
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
        target: 'https://echarts.apache.org/examples', //要跳转的位置 ,拼接
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') //重写api，替换成空的
      },
      '/XG': {
        //重定向
        target: 'https://api.inews.qq.com/newsqa', //要跳转的位置 ,拼接
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/XG/, '') //重写api，替换成空的
      }
    }
  }
})
