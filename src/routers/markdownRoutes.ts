import type { RouterConfig } from '../types/router'
export default <RouterConfig[]>[
  {
    path: '/markdown',
    name: 'Markdown',
    redirect: '/markdown/index',
    component: () => import('../pages/markdown/index.vue'),
    meta: {
      title: 'markdown',
      icon: 'markdown'
    },
    children: [
      {
        path: 'index',
        name: 'MarkdownIndex',
        component: () => import('../pages/markdown/index.vue'),
        meta: {
          title: '在线编辑器',
          icon: 'markdown'
        }
      }
    ]
  }
]
