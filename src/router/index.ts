import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Todos from '@/views/todo.vue'
import AddTodo from '@/views/AddTodo.vue'
import EditTodo from '@/views/EditTodo.vue'

const routes: Array<RouteRecordRaw> = [
  // Route of top page
  {
    path: '/',
    name: 'Todos',
    component: Todos,
  },
  // Route of AddTodo page
  {
    path: '/new',
    name: 'AddTodo',
    component: AddTodo,
  },
  // Route of EditTodo page
  {
    // We can set parameter to do like ":id"
    path: '/edit/:id',
    name: 'EditTodo',
    component: EditTodo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
