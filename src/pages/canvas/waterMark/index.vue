<script setup lang="ts">
/**
 * @author heart
 * @description
 * @Date 2022-05-01
 */
import { ref, onMounted, defineProps } from 'vue'
import type { changeCanvasType } from '../../../types/waterMark'
interface Props {
  isGlobalShowWaterMark?: boolean | undefined
}
const canvas = ref<HTMLCanvasElement | null>(null)
const divTopElement = ref<HTMLDivElement | null>(null)
const text = ref(`heart\nthis is waterMark`)
const width = ref(200) //水印盒子的宽度
const height = ref(130) // 水印盒子的高度
const fontSize = ref(20)
const props = defineProps<Props>()
function init() {
  const c = canvas.value
  if (!c) return

  if (props.isGlobalShowWaterMark) {
    c.width = window.innerWidth
    c.height = window.innerHeight
  } else {
    const div = divTopElement.value
    if (div) {
      const rect = div.getBoundingClientRect()
      c.width = rect.width
      c.height = rect.height
    }
  }
  // 将屏幕切割
  if (c) {
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.font = fontSize.value + 'px' + ' Arial'
    ctx.fillStyle = `rgba(160, 156, 156, 0.1)`
    ctx.textAlign = 'center'
    for (
      let i = 0;
      i < c.width * 1 + width.value * 1;
      i = i + (Number.parseInt(width.value + '') || 10)
    ) {
      for (
        let j = 0;
        j < c.height * 1 + height.value * 1;
        j = j + (Number.parseInt(height.value + '') || 10)
      ) {
        ctx.save()
        ctx.translate(
          i + (Number.parseInt(width.value + '') || 10) / 2,
          j + (Number.parseInt(height.value + '') || 10) / 2
        )
        ctx.rotate((-30 * Math.PI) / 180)
        const arr = text.value.split('\n')
        for (let k = 0; k < arr.length; k++) {
          // k * fontSize.value 则是在第几个
          ctx.fillText(arr[k], 0, k * fontSize.value)
        }
        ctx.restore()
      }
    }
    ctx.stroke()
  }
}

const changeCanvas: changeCanvasType = (e: Event, field: string) => {
  if (!(e instanceof InputEvent)) return
  typeof changeCanvas.timer === 'number' && clearTimeout(changeCanvas.timer)
  if (
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement
  ) {
    switch (field) {
      case 'fontSize':
      case 'text': {
        text.value = e.target.value
        break
      }
      case 'width': {
        if (e.target.value) {
          const n = Number.parseInt(e.target.value)
          width.value = n > 50 ? (n < 1000 ? n : 1000) : 50
        }
        break
      }
      case 'height': {
        if (e.target.value) {
          const n = Number.parseInt(e.target.value)
          height.value = n > 50 ? (n < 1000 ? n : 1000) : 50
        }
        break
      }
    }
  }
  changeCanvas.timer = setTimeout(() => {
    init()
  }, 500)
}

onMounted(() => {
  init()
  window.addEventListener('resize', init, false)
})
</script>

<template>
  <div ref="divTopElement" class="water-marker">
    <template v-if="props.isGlobalShowWaterMark">
      <teleport to="body">
        <canvas ref="canvas" class="canvas"></canvas>
      </teleport>
    </template>
    <template v-else>
      <canvas ref="canvas" class="canvas"></canvas>
    </template>
    <h1>盒子范围：50 - 1000</h1>
    <textarea
      type="text"
      placeholder="水印文字"
      :value="text"
      @input="changeCanvas($event, 'text')"
    />
    <br />
    <input
      type="number"
      placeholder="盒子宽"
      :value="width"
      @input="changeCanvas($event, 'width')"
    />
    <br />
    <input
      type="number"
      placeholder="盒子高"
      :value="height"
      @input="changeCanvas($event, 'height')"
    />
    <br />
    <input
      type="number"
      placeholder="字体大小"
      :value="fontSize"
      @input="changeCanvas($event, 'fontSize')"
    />
  </div>
</template>

<style scoped>
.canvas {
  position: absolute;
  box-shadow: none;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 1000;
}
.water-marker {
  width: 100%;
  height: 100%;
  background-color: #eee;
  text-align: center;
  position: relative;
}
</style>
