<script setup lang="ts">
// switch
import { ref, defineProps, defineEmits } from 'vue'
const status = ref<boolean>(false)
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['checked'])
const checkedRef = ref<HTMLDivElement>(null!)
function handleToggleStatus() {
  if (props.disabled) return
  status.value = !status.value
  if (checkedRef.value) {
    status.value
      ? checkedRef.value.setAttribute('checked', '')
      : checkedRef.value.removeAttribute('checked')
  }
  emit('checked', status.value)
}
</script>

<template>
  <div :class="'switch-wrapper'" ref="checkedRef" :disabled="props.disabled">
    <div class="switch-toggle" @click="handleToggleStatus"></div>
  </div>
</template>

<style lang="less" scoped>
.switch-wrapper {
  display: inline-block;
  width: 3.8em;
  height: 1.9em;
  background-color: #ddd;
  border-radius: 24px;
  position: relative;
  transition: background-color 0.3s ease-in-out;
  .switch-toggle {
    display: inline-block;
    height: calc(100% - 4px);
    width: calc(50% - 4px);
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    transition: all 0.18s ease-in-out;
    cursor: pointer;
  }
  &[checked] {
    background-color: var(--primary-color, #38ae70);
    .switch-toggle {
      left: calc(50% + 2px);
    }
  }
  &[disabled='true'] {
    cursor: not-allowed;
    opacity: 0.7;
    .switch-toggle {
      cursor: inherit;
    }
  }
}
</style>
