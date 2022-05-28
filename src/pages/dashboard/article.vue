<script setup lang="ts">
import Card from '../../components/card/card.vue'
import { Calendar } from 'ant-design-vue'
</script>

<template>
  <div>
    <Card title="日程计划表">
      <div class="date">
        <Calendar />
      </div>
    </Card>
  </div>
</template>

<style lang="less" scoped>
.date {
  background-color: var(--background-color);
  overflow: hidden;
  padding: 12px;
}
:deep(.ant-picker-calendar) {
  color: var(--text);
  background-color: var(--background-color);
}
:deep(.ant-picker-calendar-full .ant-picker-panel) {
  background-color: var(--background-color);
}
:deep(.ant-picker-cell-in-view) {
  color: var(--text);
}
:deep(.ant-picker-content th) {
  color: var(--text);
}
:deep(.ant-picker-cell) {
  color: var(--text-2) !important;
}
</style>
