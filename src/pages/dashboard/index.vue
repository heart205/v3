<script setup lang="ts">
import Header from './header.vue'
import Article from './article.vue'
</script>

<template>
  <div>
    <div class="dash-board">
      <Header />
      <div class="dash-content">
        <div>
          <Article />
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.dash-board {
  padding: 8px;
}
.dash-content {
  display: flex;
  padding: 12px 0;
  & > div {
    &:nth-child(1) {
      flex: 3;
    }
    &:nth-child(2) {
      flex: 1;
    }
  }
}
</style>
