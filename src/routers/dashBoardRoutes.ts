import type { RouterConfig } from '../types/router'

export default <RouterConfig[]>[
  {
    path: '/',
    name: 'DashBoard',
    redirect: '/dashBoard',
    component: () => import('../pages/dashboard/index.vue'),
    meta: {
      title: 'dashBoard',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'dashBoard',
        name: 'DashBoard',
        component: () => import('../pages/dashboard/index.vue'),
        meta: {
          title: '控制台',
          icon: 'test'
        }
      }
    ]
  }
]
