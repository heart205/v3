<script setup lang="ts">
// https://imzbf.github.io/md-editor-v3/demo/index
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { reactive } from 'vue'
const d = reactive({
  content: ''
})
</script>

<template>
  <div class="markdown">
    <MdEditor
      v-model="d.content"
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
</template>

<style lang="less" scoped>
.markdown {
  height: 100%;
  padding: 12px;
}
/deep/ .md {
  height: 100%;
}
</style>
