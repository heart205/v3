<script setup lang="ts">
import { shallowReactive } from 'vue'
import { useStoreUser } from '../../store/hooks/useStoreConfig'
import type { ArticleList } from '../../types/services/markdown'
import { getArticleListFunc } from './hooks/useArticleList'
const user = useStoreUser()
const articleList = shallowReactive<{
  list: ArticleList[]
  page: number
  pageSize: number
  total: number
}>({
  list: [],
  page: 1,
  pageSize: 10,
  total: 0
})
getArticleListFunc(user.userId).then((res) => {
  articleList.list = res
})
</script>

<template>
  <div class="h-full overflow-auto">
    <template v-for="item in articleList.list">
      <div class="article-warp bg-white">
        <h2>
          <router-link
            :to="{
              // params参数不能和path 一起使用 需要使用name替代
              name: 'MarkdownIndex',
              params: { id: item.id, type: 'edit' }
            }"
          >
            {{ item.title }}</router-link
          >
        </h2>
        <div class="footer">
          <span class="article-time"> {{ item.updateTime }} </span>
          <span> {{ item.readNumbers || 0 }}阅读 </span>
          <span> {{ item.commonNumber || 0 }}评论 </span>
          <span> {{ item.likeNumber || 0 }}点赞 </span>
          <span> {{ item.collectNumber || 0 }}收藏 </span>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
@color: rgba(0, 0, 0, 0.54);
@titleColor: #1d2129;
@borderColor: #eee;
@hoverColor: #1890ff;
.footer {
  color: @color;
  & > span:nth-child(1) {
    padding: 0 12px;
    border-right: 1px solid @borderColor;
  }
  & > span:nth-child(n + 2) {
    margin: 6px 12px;
    &::after {
      content: '';
      margin: 0 6px;
      border-radius: 50%;
    }
  }
}
.article-warp {
  padding: 12px;
  border-bottom: 1px solid @borderColor;
  & h2 {
    padding: 0 12px;
    font-size: 16px;
    margin-bottom: 6px;
    a {
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      color: @titleColor;
      &:hover {
        color: @hoverColor;
      }
    }
  }
}
</style>
