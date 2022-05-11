<script setup lang="ts">
import { computed, onMounted, reactive, ref, shallowRef, watch } from 'vue'
import Logo from './logo.vue'
import type { LogoType } from '../../types/sidebar'
import SideBar from './sideBar.vue'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
// 动态计算高度
const logoRef = shallowRef<LogoType>()
const height = ref(0)

const style = reactive<{ config: Record<string, unknown> }>({
  config: {}
})
const config = useStoreConfig()
watch(
  () => config.toggle,
  (newVal) => {
    if (newVal) {
      style.config = {
        width: '80px'
      }
    } else {
      style.config = {}
    }
  },
  { immediate: true }
)
onMounted(() => {
  if (logoRef && logoRef.value) {
    const current = logoRef.value.$el
    if (current instanceof HTMLDivElement) {
      const client = current.getBoundingClientRect()
      height.value = client.height
    }
  }
})

const sideBarHeight = computed(() => {
  return document.body.clientHeight - height.value + 'px'
})
</script>

<template>
  <div class="w-48 width-transition" :style="style.config">
    <Logo ref="logoRef" />
    <div :style="{ height: sideBarHeight }" class="border-right-lg">
      <SideBar />
    </div>
  </div>
</template>
