<script setup lang="ts">
import { footer } from '../../config/index'
</script>

<template>
  <div class="h-16 text-center footer-line-height footer-shadow">
    <span>
      {{ footer }}
    </span>
  </div>
</template>

<style>
.footer-line-height {
  line-height: 64px;
}
.footer-shadow {
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.1);
}
</style>
