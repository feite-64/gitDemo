import { createRouter, RouteRecordRaw, createWebHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: () => import('../App.vue')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
