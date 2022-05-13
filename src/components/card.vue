<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    default: String,
    required: true
  }
})
</script>

<template>
  <div class="h-card">
    <div class="h-card-title">
      <div>{{ props.title }}</div>
      <slot name="cardRight"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
@bg-color: #fff;
@color: rgb(86 82 82 / 85%);
@border-color: #f0f0f0;
.h-card {
  min-height: 48px;
  background-color: @bg-color;
}
.h-card-title {
  min-height: inherit;
  height: 100%;
  padding: 0 24px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  color: @color;
  border-bottom: 1px solid @border-color;
}
</style>
