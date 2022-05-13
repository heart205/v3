<script setup lang="ts">
// 项目配置
import { ref, defineProps, defineEmits } from 'vue'
import type { DrawerProps } from 'ant-design-vue'
import { Drawer } from 'ant-design-vue'
import { projectConfig } from '../../config/index'
const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update'])
console.log(emit)
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
  ></Drawer>
</template>

<style></style>
