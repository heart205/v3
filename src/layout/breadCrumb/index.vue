<script setup lang="ts">
// 面包屑导航
// breadCrumb
import { Breadcrumb } from 'ant-design-vue'
import { useRouterToBreadCrumb } from './hooks/useRouterToBreadCrumb'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import type { Route } from 'ant-design-vue/lib/breadcrumb/Breadcrumb'
const routers = ref<Route[]>()
const routes = useRoute()
watch(
  () => routes.matched,
  (newVal) => {
    routers.value = useRouterToBreadCrumb(newVal)
  },
  { immediate: true }
)
</script>

<template>
  <div class="breadcrumb-wrapper">
    <Breadcrumb :routes="routers">
      <template #itemRender="{ route, routes, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">{{
          route.breadcrumbName
        }}</span>
        <router-link
          v-else
          :to="paths.length === 0 ? '/' : paths[paths.length - 1]"
          >{{ route.breadcrumbName }}
        </router-link>
      </template>
    </Breadcrumb>
  </div>
</template>
