import type { RouteLocationMatched } from 'vue-router'

interface Route {
  path: string
  breadcrumbName: string
  children?: Array<{
    path: string
    breadcrumbName: string
  }>
}
export function useRouterToBreadCrumb(matched: RouteLocationMatched[]) {
  const arr: Route[] = matched
    // 排除第二个导航栏
    .filter((val, index) => index !== 1)
    .map<Route>((val) => {
      return {
        path: val.path,
        breadcrumbName:
          val.meta && val.meta.title
            ? (val.meta.title as string)
            : typeof val.name === 'string'
            ? val.name
            : '',
        meta: val.meta
      }
    })
  return arr
}
