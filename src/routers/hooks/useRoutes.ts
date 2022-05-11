/**
 * @author heart
 * @description 父子嵌套路由添加
 * @Date 2022-05-06
 */
import type { RouterConfig } from '../../types/router'
export function useRoutes(routes: RouterConfig, routesArray: RouterConfig[]) {
  return <RouterConfig>{
    ...routes,
    children: routes.children
      ? [...routes.children, ...routesArray]
      : [...routesArray]
  }
}

export function useRoutesArray(
  routes: RouterConfig[],
  routesArray: RouterConfig[]
) {
  return routes.map((val) => {
    return <RouterConfig>{
      ...val,
      children: val.children
        ? [...val.children, ...routesArray]
        : [...routesArray]
    }
  })
}
