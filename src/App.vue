<script setup lang="ts">
import Loading from './layout/fallback/loading.vue'
</script>

<template>
  <router-view />
  <Loading />
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
