<script setup lang="ts">
/**
 * @author heart
 * @description 鼠标点击事件
 * @Date 2022-05-01
 */
import useMouseDown from '../../hooks/useMouseDown'
const mouseDetail = useMouseDown()
</script>

<template>
  <h1>测试点击mouse hook</h1>
  {{ mouseDetail.x }}
  <br />
  {{ mouseDetail.y }}
</template>

<style></style>
