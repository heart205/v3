<script setup lang="ts">
import { Menu } from 'ant-design-vue'
import { ref, shallowReactive, watch } from 'vue'
import { useMenuItem } from './hooks/useItemList'
import type { ItemConfig } from '../../types/sideBar'
import MenuItemDeep from './menuItem.vue'
import { useStore } from 'vuex'
import type { storeImpl, systemConfig } from '../../types/store'
import { useRoute } from 'vue-router'
import { useAddTabs } from '../../hooks/useAddTabs'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
import { useOpenKey } from './hooks/useOpenKey'
import type { ThemeColor } from '../../constant/enum'
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
const theme = ref<ThemeColor>()
theme.value = configStore.themeColor
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
console.log(configStore)
watch(
  () => configStore.themeColor,
  (val) => {
    console.log(val)
    theme.value = val
  },
  { immediate: true }
)
</script>

<template>
  <Menu
    v-model:selectedKeys="data.selectedKeys"
    :openKeys="data.openKey"
    mode="inline"
    :inlineIndent="24"
    :theme="theme"
    :inline-collapsed="data.config.toggle"
    :multiple="false"
    :style="{ borderRight: 'none' }"
  >
    <menu-item-deep type="subMenu" v-for="i in item" :key="i.key" :list="i" />
  </Menu>
</template>

<style></style>
