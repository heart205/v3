<template>
  <button class="btn" ref="btn" @click="btnClick">
    <slot> </slot>
  </button>
</template>

<script lang="ts" setup>
function btnClick(e: MouseEvent) {
  const target = e.target as HTMLButtonElement
  if (target) {
    target.setAttribute(
      'style',
      '--x: ' + e.offsetX + 'px; --y: ' + e.offsetY + 'px;'
    )
  }
}
</script>

<style lang="less">
.btn {
  display: inline-block;
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: all 0.3s;
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: var(--x, 0);
    top: var(--y, 0);
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    // scale关键
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
    transition: transform 0.3s, opacity 0.8s;
  }
}

.btn:not([disabled]):active::after {
  transform: translate(-50%, -50%) scale(0);
  opacity: 0.3;
  transition: 0s;
}
</style>
