import { routes } from '../../../routers/index'
import type { RouterConfig } from '../../../types/router'
import type { ItemConfig } from '../../../types/sideBar'

function createItemConfig(
  config: RouterConfig,
  parentPath: string
): ItemConfig | undefined {
  if (config.meta && !config.meta.hidden) {
    const path =
      parentPath === ''
        ? config.path
        : parentPath === '/'
        ? `${parentPath}${config.path}`
        : `${parentPath}/${config.path}`
    return {
      key: path,
      name: config.meta.title || config.name,
      path,
      type: config.meta.sideBarType || 'menuItem',
      icon: config.meta.icon || 'index'
    }
  }
}

function deepArrayToSideBar(
  children: RouterConfig[],
  result: ItemConfig[],
  deepNumber = 1,
  parentPath = ''
): void {
  children.forEach((child: RouterConfig) => {
    const item = createItemConfig(child, parentPath)
    if (item) {
      result.push(item)
      if (child.children && child.children.length > 0) {
        item.children = []
        deepArrayToSideBar(
          child.children,
          item.children,
          deepNumber + 1,
          item.path
        )
      }
    }
  })
}

export function useMenuItem(): ItemConfig[] {
  const itemList: ItemConfig[] = []
  if (routes instanceof Array) {
    routes.forEach((val) => {
      const itemChildrenList: ItemConfig[] = []
      if (val.children instanceof Array) {
        deepArrayToSideBar(val.children, itemChildrenList, 1)
      }
      itemList.push(...itemChildrenList)
    })
  }
  return itemList
}
