import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/components/layouts/DefaultLayout.vue';

import index from '../views/index.vue'
import incidentes from '../views/incidents/index.vue'

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
          name: 'incidents',
          component: incidentes,
        },
      ],
    },
  ]
})

export default router
