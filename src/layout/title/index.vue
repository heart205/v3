<script setup lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import type { storeImpl } from '../../types/store'
import Config from './config.vue'
import Breadcrumb from '../breadcrumb/index.vue'
const store = useStore<storeImpl>()

function handleChangeToggle() {
  store.commit('config/CHANGETOGGLE')
}

function handleChangeIsSystemCollapsedVisible(bool: boolean) {
  store.commit('config/CHANGE_IS_SYSTEM_COLLAPSED_VISIBLE', bool)
}
</script>
<template>
  <div class="h-12 title-shadow flex-shrink-0 title-wrapper">
    <div class="flex items-center">
      <!-- toggle start -->
      <div class="h-icon" @click="handleChangeToggle">
        <menu-unfold-outlined v-if="store.state.config.toggle" />
        <menu-fold-outlined v-else />
      </div>
      <!-- toggle end -->
      <!-- breadcrumb -->
      <Breadcrumb />
    </div>

    <div>
      <div class="h-icon" @click="handleChangeIsSystemCollapsedVisible(true)">
        <span class="">
          <SettingOutlined />
        </span>
      </div>
    </div>
    <Config
      :visible="store.state.config.isSystemCollapsed"
      @update="handleChangeIsSystemCollapsedVisible(false)"
    />
  </div>
</template>

<style scoped lang="less">
.title-shadow {
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}

.h-icon {
  padding: 12px 12px;
  cursor: pointer;
  transition: all 0.45s cubic-bezier(0.215, 0.61, 0.355, 1);

  span {
    font-size: 20px;
    line-height: 0;
  }

  &:hover {
    background: var(--toggle-bgc-hover);

    span {
      color: var(--toggle-btn);
    }
  }
}

html.theme-dark {
  .title-wrapper {
    background: var(--theme-bgc);
  }
}
</style>
