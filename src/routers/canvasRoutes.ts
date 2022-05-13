/**
 * @author heart
 * @description canvas模块路由组件
 * @Date 2022-05-05
 */

import type { RouterConfig } from '../types/router'

export const canvasRoutes: RouterConfig[] = [
  {
    path: '/canvas',
    name: 'canvasModules',
    redirect: '/canvas/customCanvas',
    component: () => import('@/pages/canvas/index.vue'),
    meta: {
      hidden: false,
      title: 'canvas案例',
      sideBarType: 'subMenu',
      icon: 'folder'
    },
    children: [
      {
        path: 'customCanvas',
        name: 'customCanvas',
        component: () => import('@/pages/canvas/customCanvas/index.vue'),
        meta: {
          title: '自定义画布'
        }
      },
      {
        path: 'waterMark',
        name: 'waterMark',
        component: () => import('@/pages/canvas/waterMark/index.vue'),
        meta: {
          title: 'canvas水印'
        }
      }
    ]
  }
]
