import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Todos from '@/views/todo.vue'

const routes: Array<RouteRecordRaw> = [
  // Route of top page
  {
    path: '/',
    name: 'Todos',
    component: Todos,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
