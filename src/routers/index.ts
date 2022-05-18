import * as VueRouter from 'vue-router'
import { useRoute } from './hooks/useRoute'
import config from '../store/modules/config'
import { layoutRoutes } from './layoutRoutes'
import type { RouterConfig } from '../types/router'
import { canvasRoutes } from './canvasRoutes'
import dashBoardRoutes from './dashBoardRoutes'
import MarkdownRoutes from './markdownRoutes'
import { editorRoutes } from './editorRoutes'
let routesArray: RouterConfig[] = []

routesArray = routesArray.concat(
  dashBoardRoutes,
  canvasRoutes,
  MarkdownRoutes,
  editorRoutes
)

let routes: RouterConfig[] = []
const index = layoutRoutes.findIndex(
  (val: RouterConfig) => val.name === 'Layout'
)
if (index > -1) {
  const route = layoutRoutes[index]
  routes = useRoute(route, config.state, routesArray)
}

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})
export default router

export { routes }
