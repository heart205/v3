<script setup lang="ts">
// https://imzbf.github.io/md-editor-v3/demo/index
import MdEditor from 'md-editor-v3'
import { Input, Button } from 'ant-design-vue'
import { reactive } from 'vue'
import { useFactoryStore } from '../../store/hooks/useStoreConfig'
import { addArticle, handleEditArticleApi } from '../../services/markdown'
import { msgSuccess } from '../../utils/message'
import 'md-editor-v3/lib/style.css'
import { useParamsSearch } from './hooks/useParamsSearch'
import { getEditArticleInfo } from '../../services/markdown'
import { useRouter } from 'vue-router'
const article = reactive({
  content: '',
  title: ''
})
const params = useParamsSearch()
const user = useFactoryStore('user')
const router = useRouter()
function toIndex() {
  router.push({
    name: 'MarkdownList'
  })
}
function handleAddArticle() {
  addArticle({
    userId: user.userId,
    title: article.title,
    content: article.content
  }).then((res) => {
    const { data } = res
    if (data.code === 200) {
      msgSuccess(data.message || '添加成功')
      toIndex()
    }
  })
}
function handleEditArticleFunc() {
  handleEditArticleApi({
    userId: user.userId,
    title: article.title,
    content: article.content,
    id: Number(params.id)
  }).then((res) => {
    const { data } = res
    if (data.code === 200) {
      msgSuccess(data.message || '修改成功')
      toIndex()
    }
  })
}

function isAddOrEdit() {
  if (params.type === 'edit') {
    return handleEditArticleFunc()
  }
  return handleAddArticle()
}

if (params.type === 'edit') {
  getEditArticleInfo({
    id: Number(params.id)
  }).then((res) => {
    const { data } = res
    if (data.code === 200 && data.data) {
      article.title = data.data.title
      article.content = data.data.content
    }
  })
}
</script>
<template>
  <div class="h-full p-4">
    <div class="markdown h-full">
      <div class="markdown-title">
        <Input
          v-model:value="article.title"
          :bordered="false"
          placeholder="输入文章标题...."
        />

        <div>
          <Button>草稿箱</Button>
          <Button type="primary" @click="isAddOrEdit">发布</Button>
        </div>
      </div>
      <MdEditor
        v-model="article.content"
        :toolbars="[
          'bold',
          'underline',
          'italic',
          'strikeThrough',
          '-',
          'title',
          'sub',
          'sup',
          'quote',
          'unorderedList',
          'orderedList',
          '-',
          'codeRow',
          'code',
          'link',
          'image',
          'table',
          'mermaid',
          'katex',
          0,
          1,
          '-',
          'revoke',
          'next',
          'save',
          '=',
          'prettier',
          'pageFullscreen',
          'fullscreen',
          'preview',
          'htmlPreview',
          'catalog'
        ]"
      />
    </div>
  </div>
</template>
<style lang="less" scoped>
.markdown {
  overflow: auto;
}
:deep(.md) {
  height: calc(100% - 44px);
  border: none;
}
:deep(#md-editor-v3-textarea::-webkit-scrollbar) {
  width: 1px;
}
.markdown-title {
  box-sizing: border-box;
  background-color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
  & > input {
    flex: 1;
    font-size: 20px;
  }
  & > div {
    padding: 0 12px;
    & > button {
      margin: 0 8px;
    }
  }
}
</style>
