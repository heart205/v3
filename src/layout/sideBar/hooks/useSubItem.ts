/**
 * @author heart
 * @description 生成useSubItem的hook
 * @Date 2022-05-11
 */

import { h } from 'vue'
import type { ItemConfig } from '../../../types/sidebar'
import { SubMenu, MenuItem } from 'ant-design-vue'
import { useStore } from 'vuex'
import type { storeImpl } from '../../../types/store'
import type { Router } from 'vue-router'

export function useMenuItem(item: ItemConfig, deepNumber = 1, router: Router) {
  const store = useStore<storeImpl>()
  if (store.state.config.deepArrayToSideBar < deepNumber) return
  return h(
    MenuItem,
    {
      key: item.key,
      onClick: () => {
        router.push({
          path: item.path
        })
      }
    },
    {
      default: () => [
        item.name,
        ...((item.children &&
          item.children instanceof Array &&
          item.children.map((val) => {
            if (val.type === 'subMenu') {
              return useSubItem(val, deepNumber + 1, router)
            }
            if (val) {
              return useMenuItem(val, deepNumber + 1, router)
            }
          })) ||
          [])
      ]
    }
  )
}

export function useSubItem(item: ItemConfig, deepNumber = 1, router: Router) {
  const store = useStore<storeImpl>()
  if (store.state.config.deepArrayToSideBar < deepNumber) return
  return h(
    SubMenu,
    {
      key: item.key,
      title: item.name
    },
    {
      default: () =>
        item.children &&
        item.children instanceof Array &&
        item.children.map((val) => {
          if (val.type === 'subMenu') {
            return useSubItem(val, deepNumber + 1, router)
          }
          return useMenuItem(val, deepNumber + 1, router)
        })
    }
  )
}
