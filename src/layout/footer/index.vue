<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { footer, isShowFooter } from '../../config/index'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
const footerRef = ref<HTMLDivElement>(null!)

const state = useStoreConfig()
onMounted(() => {
  if (isShowFooter) {
    // 计算页面的高度
    const rect = footerRef.value && footerRef.value.getBoundingClientRect()
    state.footerHeight = rect.height || 0
  }
})
</script>

<template>
  <div
    v-if="isShowFooter"
    class="h-16 text-center footer-line-height footer-shadow flex-shrink-0"
    ref="footerRef"
  >
    <span>
      {{ footer }}
    </span>
  </div>
</template>

<style>
.footer-line-height {
  line-height: 64px;
}
.footer-shadow {
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}
</style>
