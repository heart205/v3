<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import type { storeImpl } from '../../types/store'
const store = useStore<storeImpl>()

function handleChangeToggle() {
  store.commit('config/CHANGETOGGLE')
}
</script>
<template>
  <div class="h-16 title-shadow">
    <div class="toggle-btn" @click="handleChangeToggle">
      <menu-unfold-outlined v-if="store.state.config.toggle" />
      <menu-fold-outlined v-else />
    </div>
  </div>
</template>

<style scoped lang="less">
.title-shadow {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
}
.toggle-btn {
  display: inline-block;
  padding: 20px 12px;
  cursor: pointer;
  transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);
  span {
    font-size: 20px;
  }
  &:hover {
    background: var(--toggle-bgc-hover);
    span {
      color: var(--toggle-btn);
    }
  }
}
</style>
