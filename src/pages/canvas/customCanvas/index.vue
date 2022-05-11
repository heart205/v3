<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
/**
 * @author heart
 * @description
 * @Date 2022-05-01
 */
type optionsType = {
  lineWidth: number
  ctx: CanvasRenderingContext2D | null
  width: number
  height: number
  isWindowListener: boolean
}
const canvas = ref<HTMLCanvasElement | null>(null)
const options = reactive<optionsType>({
  lineWidth: 5,
  ctx: null,
  width: 300,
  height: 150,
  isWindowListener: false
})
function mouseMove(event: MouseEvent) {
  if (!options.ctx) return
  options.ctx.restore()
  options.ctx.lineTo(event.offsetX, event.offsetY)
  options.ctx.stroke()
  options.ctx.save()
  event.stopPropagation()
  return false
}
function addEventListener(
  canvas: HTMLCanvasElement,
  options: optionsType,
  event: MouseEvent
) {
  const { offsetX, offsetY } = event
  if (canvas) {
    const ctx = canvas.getContext('2d')
    if (ctx) {
      options.ctx = ctx
      options.ctx.beginPath()
      options.ctx.moveTo(offsetX, offsetY)
      canvas.addEventListener('mousemove', mouseMove, false)
    }
  }
}
function removeEventListener(canvas: HTMLCanvasElement, options: optionsType) {
  if (options.ctx) {
    options.ctx.closePath()
  }
  canvas && canvas.removeEventListener('mousemove', mouseMove, false)
}
function mouseDown(event: MouseEvent) {
  const canvas = event.target
  if (canvas instanceof HTMLCanvasElement) {
    addEventListener(canvas, options, event)
  }
}
function AddEventRemoveCanvasMouseMoving() {
  if (canvas && canvas.value) {
    removeEventListener(canvas.value, options)
  }
}
function mouseUp(event: MouseEvent) {
  const canvas = event.target
  if (canvas instanceof HTMLCanvasElement) {
    removeEventListener(canvas, options)
  }
}
// 初始化配置
function init() {
  const c = canvas.value
  if (c) {
    // width height 决定了多少像素可以显示在画布上
    // c.style.backgroundColor = 'transparent'
    c.width = options.width * window.devicePixelRatio
    c.height = options.height * window.devicePixelRatio
    // 这里的 宽 高 还是300 150 相当于画布被缩放
    c.style.width = options.width + 'px'
    c.style.height = options.height + 'px'
    const ctx = c.getContext('2d')
    if (!ctx) return
    ctx.lineWidth = options.lineWidth
    // 因此这里要放大
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  }
}
function handleClearCanvas() {
  if (canvas && canvas.value) {
    const c = canvas.value
    if (c) {
      const ctx = c.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, c.width, c.height)
    }
  }
}
function handleSubmitCanvas() {
  if (canvas && canvas.value) {
    const c = canvas.value
    c.toBlob(
      (blob) => {
        // 'sign' + new Data().getTime() + '.png'
        // 生成的文件的名字和类型
        if (blob) {
          const file = new window.File(
            [blob],
            `sign${new Date().getTime()}.png`,
            {
              type: 'image/png'
            }
          )
          console.log(file)
        }
      },
      'image/jpeg',
      1
    )
  }
}
onMounted(() => {
  init()
  // TODO: 不需要移出就停止 则 关闭这个
  if (options.isWindowListener) {
    window.addEventListener('mousemove', AddEventRemoveCanvasMouseMoving, false)
  }
})
</script>

<template>
  <div class="bgc">
    <div>
      <canvas ref="canvas" @mousedown="mouseDown" @mouseup="mouseUp"></canvas>
    </div>
    <div class="canvas-btn">
      <button @click="handleClearCanvas">Clear</button>
      <button @click="handleSubmitCanvas">Save</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
canvas {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}

button {
  font-weight: 400;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
}
button:hover {
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.canvas-btn button {
  margin: 10px;
}
.bgc {
  width: 100%;
  height: 100%;
  padding: 20px;
  text-align: center;
  canvas {
    display: inline-block;
  }
}
</style>
