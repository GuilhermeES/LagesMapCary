import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import LoginLayout from '@/components/layouts/LoginLayout.vue';

import index from '../views/index.vue'
import login from '../views/login.vue'
import incidentes from '../views/incidentes/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: index,
        },
        {
          path: 'incidentes',
          name: 'incidentes',
          component: incidentes,
        },
      ],
    },
    {
      path: '/login',
      component: LoginLayout,
      children: [
        {
          path: '',
          name: 'login',
          component: login,
        },
      ],
    },
  ]
})

export default router
