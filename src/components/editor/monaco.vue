<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { onMounted, ref } from 'vue'
//@see:https://juejin.cn/post/6865912842260856845
// Unexpected usage:
// @see:https://www.npmjs.com/package/vite-plugin-monaco-editor
const editor = ref<HTMLDivElement>(null!)

const data = ref<string>()
onMounted(() => {
  monaco.editor.create(editor.value, {
    language: 'typescript',
    theme: 'vs-dark',
    value: data.value,
    minimap: {
      enabled: false
    }
  })
})
</script>

<template>
  <div ref="editor" class="h-full"></div>
</template>

<style></style>
