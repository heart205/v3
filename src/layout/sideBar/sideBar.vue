<script setup lang="ts">
import { Menu } from 'ant-design-vue'
import { shallowReactive, watch } from 'vue'
import { useMenuItem } from './hooks/useItemList'
import type { ItemConfig } from '../../types/sideBar'
import MenuItemDeep from './menuItem.vue'
import { useStore } from 'vuex'
import type { storeImpl } from '../../types/store'
import type { systemConfig } from '../../types/store'
import { useRoute } from 'vue-router'
import { useAddTabs } from '../../hooks/useAddTabs'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
import { useOpenKey } from './hooks/useOpenKey'
const item = useMenuItem()

const store = useStore<storeImpl>()

const data = shallowReactive<{
  selectedKeys: string[]
  sideItem: ItemConfig[]
  config: systemConfig
  openKey: string[]
}>({
  selectedKeys: [],
  sideItem: [],
  config: store.state.config,
  openKey: []
})
const route = useRoute()
const configStore = useStoreConfig()

watch(
  () => route.meta.title as string,
  (newVal) => {
    useAddTabs(
      {
        path: route.path,
        name: newVal
      },
      configStore
    )
    data.selectedKeys = [route.path]
    data.openKey = useOpenKey(route.path, data.openKey)
  },
  { immediate: true }
)
</script>

<template>
  <!-- TODO: 还有一个openKey需要绑定 -->
  <Menu
    v-model:selectedKeys="data.selectedKeys"
    v-model:openKeys="data.openKey"
    mode="inline"
    :inlineIndent="24"
    :theme="data.config.sideBarTheme"
    :inline-collapsed="data.config.toggle"
    :style="{ borderRight: 'none' }"
  >
    <menu-item-deep type="subMenu" v-for="i in item" :key="i.key" :list="i" />
  </Menu>
</template>

<style></style>
