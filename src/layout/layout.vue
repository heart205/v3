<script setup lang="ts">
import SideBar from './sideBar/index.vue'
import Title from './title/index.vue'
import Footer from './footer/index.vue'
</script>
<template>
  <div class="flex h-full w-full">
    <SideBar />
    <div class="flex flex-col flex-1">
      <Title />
      <div class="flex-1 content">
        <router-view />
      </div>
      <Footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  background-color: var(--bg-color);
}
</style>
