<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { defineProps } from 'vue'
interface Props {
  path: string | number
  name: string
}
const props = defineProps<Props>()
const route = useRoute()
const router = useRouter()

function toPath() {
  const path = String(props.path)
  if (path.startsWith('/')) {
    router.push(path)
    return
  }
  router.push(`/${path}`)
}
</script>

<template>
  <a :class="{ tabs: true, activeTabs: path === route.path }" @click="toPath">
    {{ props.name }}
  </a>
</template>

<style lang="less" scoped>
@btn-color: rgba(0, 0, 0, 0.85);
.tabs {
  display: inline-block;
  padding: 3px 12px;
  margin: 3px 6px;
  font-size: 12px;
  border-radius: 4px;
  color: @btn-color;
  border: 1px solid #eee;
}
.activeTabs {
  color: var(--color);
  background-color: var(--btn-color);
}
</style>
