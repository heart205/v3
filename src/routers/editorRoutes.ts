import type { RouterConfig } from '../types/router'

export const editorRoutes: RouterConfig[] = [
  {
    path: '/editor',
    name: 'editor',
    meta: {
      title: '富文本编辑器'
    },
    redirect: '/editor/index',
    component: () => import('../pages/editor/index.vue'),
    children: [
      {
        path: 'index',
        name: 'monacoEditor',
        meta: {
          title: 'monacoEditor'
        },
        component: () => import('../pages/editor/index.vue')
      }
    ]
  }
]
