import * as VueRouter from 'vue-router'
import { useRoute } from './hooks/useRoute'
import config from '../store/modules/config'
import { layoutRoutes } from './layoutRoutes'
import type { RouterConfig } from '../types/layout'
let routes: RouterConfig[] = []

const index = layoutRoutes.findIndex(
  (val: RouterConfig) => val.name === 'Layout'
)
if (index > -1) {
  const route = layoutRoutes[index]
  routes = useRoute(route, config.state)
}

console.log(routes)
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
export default router
