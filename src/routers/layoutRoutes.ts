/**
 * @author heart
 * @description 布局路由
 * @Date 2022-05-05
 */
import type { RouterConfig } from '../types/layout'
export const layoutRoutes: RouterConfig[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue')
  }
]
