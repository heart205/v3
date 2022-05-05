<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Fallback from './fallback/index.vue'
const Layout = defineAsyncComponent(() => import('./layout.vue'))
</script>

<template>
  <Suspense>
    <template v-slot:default>
      <Layout />
    </template>
    <template v-slot:fallback>
      <Fallback />
    </template>
  </Suspense>
</template>

<style></style>
