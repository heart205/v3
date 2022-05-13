<script setup lang="ts">
// 项目配置
import { ref, defineProps, defineEmits } from 'vue'
import type { DrawerProps } from 'ant-design-vue'
import { Drawer, Divider } from 'ant-design-vue'
import { projectConfig } from '../../config/index'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update'])
const placement = ref<DrawerProps['placement']>('right')
function onClose() {
  emit('update', false)
}
</script>

<template>
  <Drawer
    :title="projectConfig"
    :placement="placement"
    :visible="props.visible"
    @close="onClose"
  >
    <Divider>主题配色</Divider>
  </Drawer>
</template>

<style></style>
