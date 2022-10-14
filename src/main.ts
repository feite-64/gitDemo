import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
// 将非被动事件侦听器添加到滚动块“鼠标滚轮”事件中，解决方法
import 'default-passive-events'

// import EchartsView from '@/demo/EchartsView.vue'

const Mit = mitt()
const app = createApp(App)

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
  export interface ComponentCustomProperties {
    $Bus: typeof Mit
  }
}
// declare module '@vue/runtime-core' {
//   export interface ComponentCustomProperties {
//     $filters: { format: <T>(str: T) => string }
//     $env: string
//   }
// }
// //全局挂载
app.config.globalProperties.$Bus = Mit
// app.config.globalProperties.$env = 'dev'
// app.config.globalProperties.$filters = {
//   format<T>(str: T): string {
//     return `${str}~~~`
//   }
// }
// 全局组件
// app.component('EchartsView', EchartsView)
app.mount('#app')
