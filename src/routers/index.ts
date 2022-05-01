import { defineAsyncComponent } from 'vue'

import * as VueRouter from 'vue-router'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: defineAsyncComponent(() => import('../pages/home/index.vue'))
  },
  {
    path: '/custom-canvas',
    name: 'CustomCanvas',
    component: defineAsyncComponent(
      () => import('../pages/canvas/customCanvas/index.vue')
    )
  },
  {
    path: '/canvas-waterMark',
    name: 'CanvasWaterMark',
    component: defineAsyncComponent(
      () => import('../pages/canvas/waterMark/index.vue')
    )
  },
  {
    path: '/mouse/mouse-down-hook',
    name: 'MouseDownHook',
    component: defineAsyncComponent(() => import('../pages/mouse/down.vue'))
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
export default router
