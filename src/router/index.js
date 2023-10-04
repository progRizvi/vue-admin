import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import DashboardView2 from '../views/DashboardView2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    }, {
      path: '/dashboard-2',
      name: 'dashboard',
      component: DashboardView2
    },
    {
      path: '/charts/flot',
      name: 'Flot',
      component: () => import('../views/charts/FlotView.vue')
    },
    {
      path: '/charts/morris',
      name: 'Morris',
      component: () => import('../views/charts/MorisView.vue')
    },
    {
      path: '/email',
      beforeEnter: (to, from, next) => {
        useUserStore().email ? next() : next('/')
      },
      component: () => import('../views/EmailView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HomeView.vue')
        },
        // {
        //   path: 'message/:id',
        //   component: () => import('../views/MessageView.vue')
        // }
      ]
    }
  ]
})

export default router
