<script setup lang="ts">
import { footer } from '../../config/index'
</script>

<template>
  <div class="h-16 text-center footer-line-height">
    {{ footer }}
  </div>
</template>

<style>
.footer-line-height {
  line-height: 64px;
}
</style>
