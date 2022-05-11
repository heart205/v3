/**
 * @author heart
 * @description 公共路由配置
 * @Date 2022-05-06
 */
import type { RouterConfig } from '../../types/router'
import { commonRoutes } from '../commonRoutes'
import type { systemConfig } from '../../types/store'
export function useCommonRoutes(routers: RouterConfig, config: systemConfig) {
  if (config.pageNotFoundIsContainContent) {
    const index = commonRoutes.findIndex(
      (val) => val.path === '/:pathMatch(.*)'
    )
    if (index > -1) {
      routers = {
        ...routers,
        children: routers.children
          ? [...routers.children, ...commonRoutes.splice(index, 1)]
          : [...commonRoutes.splice(index, 1)]
      }
    }
  }
  return [routers, ...commonRoutes]
}

export function useCommonRoutesArray(
  routers: RouterConfig[],
  config: systemConfig
) {
  if (config.pageNotFoundIsContainContent) {
    const index = commonRoutes.findIndex(
      (val) => val.path === '/:pathMatch(.*)'
    )
    if (index > -1) {
      routers.push(...commonRoutes.splice(index, 1))
    }
  }
  console.log(routers)
  return [...routers, ...commonRoutes]
}
