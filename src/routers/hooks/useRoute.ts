/**
 * @author heart
 * @description 获取总路由
 * @Date 2022-05-06
 */
import { useCommonRoutes } from '../hooks/useCommonRoutes'
import type { systemConfig } from '../../types/store'
import type { RouterConfig } from '../../types/router'
import { canvasRoutes } from '../canvasRoutes'
import { useRoutes } from './useRoutes'

const routesArray = [...canvasRoutes]
export function useRoute(route: RouterConfig, config: systemConfig) {
  let routes: RouterConfig[] = []
  route = useRoutes(route, routesArray)

  routes = useCommonRoutes(route, config)
  return routes
}
