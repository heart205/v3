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
</style>
