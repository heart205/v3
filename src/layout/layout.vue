<script setup lang="ts">
import SideBar from './sideBar/index.vue'
import Title from './title/index.vue'
import Footer from './footer/index.vue'
import { onMounted, reactive, ref } from 'vue'
const content = ref<HTMLDivElement>(null!)
const style = reactive<{
  height: string
}>({
  height: '100%'
})
onMounted(() => {
  const rect = content.value.getBoundingClientRect()
  const height = window.innerHeight - rect.top - 64
  style.height = `${height}px`
})
</script>
<template>
  <div class="flex h-full w-full">
    <SideBar />
    <div class="flex flex-col flex-1">
      <Title />
      <div class="flex-1 content" :style="style" ref="content">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  background-color: var(--bg-color);
  overflow: auto;
}
</style>
