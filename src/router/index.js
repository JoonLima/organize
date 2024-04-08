import Tarefas from '@/views/MinhasTarefas.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "tarefas",
    component: Tarefas,
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
