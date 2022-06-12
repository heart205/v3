<script setup lang="ts">
import TabsBtn from './btn.vue'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
import { shallowReactive, watch } from 'vue'
import type { Tabs } from '../../types/store'

const configStore = useStoreConfig()
let tabsList = shallowReactive<{
  list: Tabs[]
}>({
  list: []
})
watch(
  () => configStore.tabsList,
  (newVal) => {
    tabsList.list = newVal
  },
  { immediate: true }
)
</script>

<template>
  <div class="flex items-center text-color">
    <template v-for="item in tabsList.list" :key="item.path">
      <TabsBtn :path="item.path" :name="item.name" />
    </template>
  </div>
</template>
