<script setup lang="ts">
import { defineProps } from 'vue'
interface Props {
  title: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="h-card">
    <div class="h-card-title">
      <div>{{ props.title }}</div>
      <slot name="cardRight"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.h-card {
  min-height: 48px;
  background-color: var(--background-color);
}
.h-card-title {
  min-height: inherit;
  height: 100%;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: var(--text);
  border-bottom: 1px solid var(--border-color);
}
</style>
