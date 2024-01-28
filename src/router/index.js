import Tarefas from '@/views/Tarefas.vue'
import Anotacoes from '@/views/Anotacoes.vue'
import Financas from '@/views/Financas.vue'


import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "tarefas",
    component: Tarefas,
  },
  {
    path: "/anotacoes",
    name: "anotacoes",
    component: Anotacoes,
  },
  {
    path: "/financas",
    name: "financas",
    component: Financas,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
