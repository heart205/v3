<script setup lang="ts">
import { Spin } from 'ant-design-vue'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
const config = useStoreConfig()
</script>

<template>
  <teleport to="body">
    <div
      class="absolute w-full h-full flex top-0 z-50 spin-loading"
      v-show="config.isLoading"
    >
      <div class="m-auto">
        <Spin :spinning="config.isLoading" />
      </div>
    </div>
  </teleport>
</template>

<style lang="less" scoped>
.spin-loading {
  backdrop-filter: blur(1px);
  background-color: rgba(250, 248, 248, 0.3);
}
</style>
