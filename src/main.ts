import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
import { createPinia, PiniaPluginContext } from 'pinia'
// 将非被动事件侦听器添加到滚动块“鼠标滚轮”事件中，解决方法
import 'default-passive-events'
//  引入unocss  原子化
import 'uno.css'
// 引入 tailwind css样式组件 类似于原子化
import '@/style/tailwindcss/tailwind.css'

// 重置样式
import '@/style/reset.scss'
// 默认样式
import '@/style/global.scss'
// 自定义插件
// import Loading from '@/components/Loading'
//全局组件
// import EchartsView from '@/demo/EchartsView.vue'

const Mit = mitt()
const app = createApp(App)
const pinia = createPinia()
let timeout: null | NodeJS.Timeout = null
//pinia持久化插件 用来缓存数据，解决刷新界面数据丢失
const piniaPlugin = () => {
  // 获取缓存
  const getStorage = (key: string) => {
    return localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : {} // 第一次进入为空
  }
  // 数据缓存
  const setStorage = (key: string, value: object) => {
    localStorage.setItem(`${key}`, JSON.stringify(value))
  }
  return (content: PiniaPluginContext) => {
    // 从pinia中解构出state
    const { store } = content
    //  根据pinia模块名获取数据
    const data = getStorage(store.$id)
    // pinia 的工厂函数，用来监听 state 数据改变

    store.$subscribe(() => {
      //防抖  封装的用不了捏
      if (timeout != null) clearTimeout(timeout)
      timeout = setTimeout(() => {
        console.log(`${store.$id}发生了改变`)
        setStorage(store.$id, toRaw(store.$state))
      }, 1000)
      // 响应式解构成普通对象  实际上不影响最终结果
    })
    return { ...data }
  }
}
pinia.use(piniaPlugin())
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
//挂载插件
// app.use(Loading)
app.use(pinia)
app.mount('#app')
