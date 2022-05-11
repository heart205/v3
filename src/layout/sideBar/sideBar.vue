<script setup lang="ts">
import { Menu } from 'ant-design-vue'
import { reactive } from 'vue'
import { useMenuItem } from './hooks/useItem'
import type { ItemConfig } from '../../types/sideBar'
import MenuItemDeep from './menuItem.vue'
const data = reactive<{ selectedKeys: string[]; sideItem: ItemConfig[] }>({
  selectedKeys: [],
  sideItem: []
})

const item = useMenuItem()
</script>

<template>
  <Menu
    v-model:selectedKeys="data.selectedKeys"
    mode="inline"
    :inlineIndent="0"
  >
    <menu-item-deep type="subMenu" v-for="i in item" :key="i.key" :list="i" />
  </Menu>
</template>

<style></style>
