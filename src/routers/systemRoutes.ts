import type { RouterConfig } from '../types/router'
export default <RouterConfig[]>[
  {
    path: '/systemManager',
    name: 'SystemManager',
    redirect: '/systemManager/dict',
    component: () => import('../pages/system/index.vue'),
    meta: {
      title: 'systemManager',
      icon: 'icon-setting'
    },
    children: [
      {
        path: 'dict',
        name: 'DictionaryManagement',
        component: () => import('../pages/system/dict/index.vue'),
        meta: {
          title: '数据字典',
          icon: 'dataDictionary'
        }
      }
    ]
  }
]
