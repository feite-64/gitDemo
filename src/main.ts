import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
// 将非被动事件侦听器添加到滚动块“鼠标滚轮”事件中，解决方法
import 'default-passive-events'
// 引入 tailwind css样式组件 类似于原子化
import './tailwindcss/tailwind.css'
//  引入unocss  原子化
import 'uno.css'
// import EchartsView from '@/demo/EchartsView.vue'
// 自定义插件
import Loading from '@/components/Loading'

const Mit = mitt()
const app = createApp(App)

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: { format: <T>(str: T) => string } //全局函数
    $Bus: typeof Mit // eventBus 发布订阅模式传参
    $loading: {
      //自定义插件
      showToast: (message: string) => void
    }
  }
}

// //全局挂载
app.config.globalProperties.$Bus = Mit
app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `${str}~~~`
  }
}
// 全局组件
// app.component('EchartsView', EchartsView)
app.use(Loading)
app.mount('#app')
