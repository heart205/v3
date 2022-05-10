<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'
import type Logo from './logo.vue'
// 动态计算高度
const logoRef = shallowRef<typeof Logo>()
const height = ref(0)

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
  <div class="w-48">
    <Logo ref="logoRef" />
    <div :style="{ height: sideBarHeight }"></div>
  </div>
</template>

<style></style>
