import type { RouterConfig } from '../types/router'

export default <RouterConfig[]>[
  {
    path: '/dashBoard',
    name: 'DashBoard',
    redirect: '/dashBoard/index',
    component: () => import('../pages/dashboard/index.vue'),
    meta: {
      title: '控制台',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'index',
        name: 'DashBoardIndex',
        component: () => import('../pages/dashboard/index.vue'),
        meta: {
          title: '导航面板',
          icon: 'test'
        }
      }
    ]
  }
]
