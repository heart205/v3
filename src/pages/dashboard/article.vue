<script setup lang="ts">
import Card from '../../components/card/card.vue'
</script>

<template>
  <div>
    <Card title="文章" />
    <div class="article">
      <div class="article-li">
        <h2>heart</h2>
        <!-- 标签栏 -->
        <div class="tabs"></div>
        <!-- 段落介绍 -->
        <p>dashboard</p>
        <!-- 设置的信息 -->
        <div></div>
        <!-- 点赞 点星星 留言等 -->
        <div></div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@color: rgba(0, 0, 0, 0.85);
@border-color: #f0f0f0;
.article {
  background-color: #fff;
  overflow: hidden;
  .article-li {
    margin: 12px 24px;
    color: @color;
    &::after {
      content: '';
      width: 98%;
      margin: auto;
      display: block;
      border-bottom: 1px solid @border-color;
    }
    &:last-of-type {
      &::after {
        border-bottom: none;
      }
    }
    & > p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    & > h2 {
      font-size: 16px;
    }
  }
}
</style>
