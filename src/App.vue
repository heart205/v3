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
    cycleChangeColor()
  },
  {
    immediate: true
  }
)

watch(
  () => config.systemColor,
  () => {
    cycleChangeColor()
  }
)

function cycleChangeColor(count = 2) {
  for (let i = 0; i < count; i++) {
    changeThemeColor()
  }
}

function changeThemeColor() {
  setTimeout(() => {
    ConfigProvider.config({
      prefixCls: prefixCls.value,
      theme: {
        primaryColor: config.systemColor
      }
    })
  }, 1000)
}
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
