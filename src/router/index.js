import { createRouter, createWebHistory } from 'vue-router'

import About from '@/pages/About';

const routes = [
  {
    path: '/',
    // name: 'Home',
    component: About
  },
  {
    path: '/Navbar',
    component: () => import('@/components/Navbar')
  },
  {
    path: '/attempt69',
    component: () => import('@/pages/attempt69')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
