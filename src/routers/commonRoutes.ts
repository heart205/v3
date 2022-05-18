/**
 * @author heart
 * @description 公共路由
 * @Date 2022-05-05
 */
import type { RouterConfig } from '../types/router'
export const commonRoutes: RouterConfig[] = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('../pages/404/index.vue')
  }
]
