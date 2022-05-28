<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
import { Tabs, TabPane } from 'ant-design-vue'
import { Input } from 'ant-design-vue'
import Filter from './filter.vue'
import Article from './article.vue'
const Search = Input.Search
// 文章列表
const data = reactive({
  activeKey: '1',
  searchValue: ''
})
const articleList = ref<HTMLDivElement>(null!)
const articleStyle = reactive({
  height: '100%'
})
const state = useStoreConfig()
function initHeight() {
  if (articleList.value) {
    const rect = articleList.value.getBoundingClientRect()
    const height =
      window.innerHeight -
      rect.top -
      (state.contentPadding || 16) -
      (state.footerHeight || 0)
    articleStyle.height = height + 'px'
  }
}
onMounted(() => {
  initHeight()
})
watch(
  () => state.footerHeight,
  (newVal) => {
    initHeight()
  }
)
function onSearch(searchValue: string) {
  console.log(searchValue)
}
</script>

<template>
  <div class="h-full p-4">
    <div class="w-full h-full bg-w">
      <Tabs v-model:activeKey="data.activeKey">
        <template #rightExtra>
          <Search
            v-model="data.searchValue"
            placeholder="input search text"
            style="width: 200px"
            @search="onSearch"
          />
        </template>
        <TabPane key="1" tab="文章">
          <Filter ref="filter" />
          <div class="h-full" :style="articleStyle" ref="articleList">
            <Article />
          </div>
        </TabPane>
        <TabPane key="2" tab="草稿箱">草稿箱</TabPane>
      </Tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
:deep(.ant-tabs-nav) {
  padding: 0 20px;
}
.bg-w {
  background: var(--background-color);
}
</style>
