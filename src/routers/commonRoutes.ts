/**
 * @author heart
 * @description 公共路由
 * @Date 2022-05-05
 */
import { defineAsyncComponent } from 'vue'
import type { RouterConfig } from '../types/layout'
export const commonRoutes: RouterConfig[] = [
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: defineAsyncComponent(() => import('../pages/404/index.vue'))
  }
]
