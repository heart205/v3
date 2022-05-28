<script setup lang="ts">
import { Timeline, TimelineItem } from 'ant-design-vue'
</script>

<template>
  <div class="time-line">
    <Timeline>
      <TimelineItem color="green">
        <p>Create a services nest-services</p>
        <span>2022-05-03</span>
      </TimelineItem>
      <TimelineItem color="green">
        <p>Create a clients v3</p>
        <span>2022-05-01</span>
      </TimelineItem>
    </Timeline>
  </div>
</template>

<style lang="less" scoped>
.time-line {
  p {
    margin-bottom: 0;
  }
  span {
    color: var(--text);
  }
}
</style>
