<script setup lang="ts">
import { markRaw, shallowReactive } from 'vue'
import { useStoreUser } from '../../store/hooks/useStoreConfig'
import type { ArticleList } from '../../types/services/markdown'
import { getArticleListFunc } from './hooks/useArticleList'
import PageNation from '../../components/pageNation/pageNation.vue'
import type { pageNationRequest } from '../../types/utils/tableRequest'
const user = useStoreUser()
const articleList = shallowReactive<{
  list: ArticleList[]
  total: number
}>({
  list: [],
  total: 0
})
function getData(data: pageNationRequest) {
  getArticleListFunc(user.userId, {
    pageSize: data.pageSize,
    offset: data.offset
  }).then((res) => {
    const { data, total } = res
    articleList.list = markRaw(data)
    articleList.total = total
  })
}
</script>

<template>
  <div class="h-full overflow-auto flex flex-col">
    <div class="overflow-auto">
      <template v-for="item in articleList.list" :key="item.id">
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
    <div class="flex-shrink-0">
      <PageNation :total="articleList.total" :get-data="getData" />
    </div>
  </div>
</template>

<style lang="less" scoped>
@titleColor: #1d2129;
@borderColor: #eee;
@hoverColor: #1890ff;
.footer {
  color: var(--text);
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
  .article-time + span {
    margin-left: 24px;
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
