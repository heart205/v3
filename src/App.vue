<script setup lang="ts">
import Loading from './layout/fallback/loading.vue'
import { ConfigProvider } from 'ant-design-vue'
import { useStoreConfig } from './store/hooks/useStoreConfig'
import { ref, watch } from 'vue'
import { ThemeColor } from './constant/enum'
const config = useStoreConfig()
const prefixCls = ref('custom-default')
watch(
  () => config.themeColor,
  (newVal) => {
    if (newVal === ThemeColor.DARK) {
      prefixCls.value = 'custom-dark'
    } else {
      prefixCls.value = 'custom-default'
    }
  },
  {
    immediate: true
  }
)

ConfigProvider.config({
  theme: {
    primaryColor: 'red'
  }
})
// 监听事件
</script>

<template>
  <ConfigProvider :prefix-cls="prefixCls">
    <router-view />
    <Loading />
  </ConfigProvider>
</template>

<style>
* {
  margin: 0;
}

body,
html,
#app {
  width: 100%;
  height: 100%;
}
</style>
