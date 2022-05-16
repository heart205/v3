import type { RouterConfig } from '../types/router'
export default <RouterConfig[]>[
  {
    path: '/markdown',
    name: 'Markdown',
    redirect: '/markdown/list',
    component: () => import('../pages/markdown/layout.vue'),
    meta: {
      title: 'markdown',
      icon: 'markdown'
    },
    children: [
      {
        path: 'list',
        name: 'MarkdownList',
        component: () => import('../pages/markdown/list.vue'),
        meta: {
          title: '文章列表',
          icon: 'markdown'
        }
      },
      {
        path: 'editor',
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
