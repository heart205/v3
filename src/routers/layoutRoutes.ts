/**
 * @author heart
 * @description 布局路由
 * @Date 2022-05-05
 */
import type { RouterConfig } from '../types/router'
export const layoutRoutes: RouterConfig[] = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/dashBoard',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页'
    }
  }
]
