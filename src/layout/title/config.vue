<script setup lang="ts">
// 项目配置
import { ref, defineProps, defineEmits } from 'vue'
import type { DrawerProps } from 'ant-design-vue'
import { Drawer, Divider } from 'ant-design-vue'
import { projectConfig, systemColorArrays } from '../../config/index'
import { useStore } from 'vuex'
import { useStoreConfig } from '../../store/hooks/useStoreConfig'
import { ThemeColor } from '../../constant/enum'
interface Props {
  visible: boolean
}
interface emits {
  (event: 'update', arg1: boolean): boolean
}
const props = defineProps<Props>()
const config = useStoreConfig()
const emit = defineEmits<emits>()
const placement = ref<DrawerProps['placement']>('right')
const store = useStore()
const toggleStatus = ref<ThemeColor>(config.themeColor)

function onClose() {
  emit('update', false)
}

function handleToggleStatusChange() {
  const status =
    toggleStatus.value === ThemeColor.LIGHT ? ThemeColor.DARK : ThemeColor.LIGHT
  localStorage.setItem('themeColor', status)
  toggleStatus.value = status
  store.commit('config/CHANGE_THEME_COLOR', toggleStatus.value)
}

function handleChangeSystemColor(color: string) {
  config.systemColor = color
}
</script>

<template>
  <Drawer
    :title="projectConfig"
    :placement="placement"
    :visible="props.visible"
    @close="onClose"
  >
    <Divider>主题</Divider>
    <div>
      <div class="toggle-warp m-auto" @click="handleToggleStatusChange">
        <span class="toggle-icon absolute h-full flex items-center theme-dark"
          >🌜</span
        >
        <span class="toggle-icon absolute h-full flex items-center theme-light"
          >🌞</span
        >
        <div
          :class="
            'toggle-circle ' +
            (toggleStatus === ThemeColor.DARK ? 'toggle-right' : '')
          "
        ></div>
      </div>
    </div>
    <Divider>系统主题</Divider>
    <div class="system-color">
      <template v-for="item in systemColorArrays" :key="item">
        <div
          @click="handleChangeSystemColor(item)"
          class="system-color-item"
          :style="{ backgroundColor: item }"
        ></div>
      </template>
    </div>

    <!-- <input type="color" value="#77bbff"> -->
  </Drawer>
</template>

<style lang="less" scoped>
@themeColor: #09d3ac;
.toggle-warp {
  background-color: #4d4d4d;
  border-radius: 30px;
  height: 24px;
  transition: 0.2s;
  width: 50px;
  position: relative;
  cursor: pointer;
  .toggle-circle {
    box-sizing: border-box;
    background-color: #fafafa;
    border: 1px solid #4d4d4d;
    border-radius: 50%;
    height: 22px;
    left: 1px;
    position: absolute;
    top: 1px;
    transition: 0.25s;
    width: 22px;
  }
  &:hover {
    .toggle-circle {
      box-shadow: 0 0 2px 3px @themeColor;
    }
  }
  .toggle-right {
    left: calc(100% - 22px - 1px);
  }
}
.theme-dark {
  left: 7px;
}
.theme-light {
  right: 7px;
}

.system-color {
  //
  display: flex;
  justify-content: center;
  align-items: center;
  .system-color-item {
    width: 20px;
    height: 20px;
    margin: 0 4px;
    cursor: pointer;
  }
}
</style>
