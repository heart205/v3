<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import type { CSSProperties } from 'vue'
import { computed, defineProps, reactive, watch } from 'vue'
import { useStoreConfig } from '@/store/hooks/useStoreConfig'
import { ThemeColor } from '@/constant/enum'
interface Props {
  path: string | number
  name: string
}
const props = defineProps<Props>()
const route = useRoute()
const router = useRouter()

const config = useStoreConfig()

const prefixCls = computed(() => {
  return config.themeColor === ThemeColor.DARK
    ? '--custom-dark'
    : '--custom-default'
})

type prefixClsType = '--custom-dark' | '--custom-default'

const hoverColorSuffixCls = '-primary-color-hover'

const style = reactive<
  {
    '--bgc-color': `var(${prefixClsType}${string})`
  } & CSSProperties
>({
  '--bgc-color': `var(${prefixCls.value}${hoverColorSuffixCls})`
})

watch(
  () => prefixCls.value,
  (newVal) => {
    style['--bgc-color'] = `var(${newVal}${hoverColorSuffixCls})`
  }
)

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
  <a
    :prefixCls="prefixCls"
    :class="{ tabs: true, activeTabs: path === route.path }"
    :style="style"
    @click="toPath"
  >
    {{ props.name }}
  </a>
</template>

<style lang="less" scoped>
.tabs {
  display: inline-block;
  padding: 3px 12px;
  margin: 3px 6px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}

.activeTabs {
  color: #fff !important;
  background-color: var(--bgc-color);
}
</style>
