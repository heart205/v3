/**
 * @author heart
 * @description tabs标签栏的操作
 * @Date 2022-05-17
 */

import { markRaw } from 'vue'
import type { systemConfig, Tabs } from '../types/store'

export function useAddTabs(tabs: Tabs, configStore: systemConfig) {
  const index = configStore.tabsList.findIndex((val) => val.path === tabs.path)
  if (index === -1) {
    configStore.tabsList = [...configStore.tabsList, markRaw(tabs)]
  }
}
