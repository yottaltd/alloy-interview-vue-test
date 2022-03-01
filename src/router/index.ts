import Home from '@/views/Home.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/character/:id',
    name: 'Character',
    component: () => import('@/views/Character.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/components/PageNotFound.vue')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
