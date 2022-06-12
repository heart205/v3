import type { RouterConfig } from '../types/router'

export default <RouterConfig[]>[
  {
    path: '/components',
    name: 'components',
    redirect: '/components/index',
    component: () => import('../pages/components/index.vue'),
    meta: {
      title: '组件库'
    },
    children: [
      {
        path: 'index',
        name: 'componentsUtils',
        component: () => import('../pages/components/index.vue'),
        meta: {
          title: '组件库首页',
          icon: 'test'
        }
      }
    ]
  }
]
