<script setup lang="ts">
import { Menu } from 'ant-design-vue'
import { reactive } from 'vue'
import { useMenuItem } from './hooks/useItemList'
import type { ItemConfig } from '../../types/sideBar'
import MenuItemDeep from './menuItem.vue'
import { useStore } from 'vuex'
import type { storeImpl } from '../../types/store'
import type { systemConfig } from '../../types/store'
const item = useMenuItem()

const store = useStore<storeImpl>()

const data = reactive<{
  selectedKeys: string[]
  sideItem: ItemConfig[]
  config: systemConfig
}>({
  selectedKeys: [],
  sideItem: [],
  config: store.state.config
})
</script>

<template>
  <Menu
    v-model:selectedKeys="data.selectedKeys"
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
