<script setup lang="ts">
import { Pagination } from 'ant-design-vue'
import { onMounted, reactive } from 'vue'
import { withDefaults, defineProps } from 'vue'
const props = withDefaults(
  defineProps<{
    total: number
    getData: (...args: any[]) => void
    isImmediate?: boolean
  }>(),
  {
    isImmediate: true
  }
)
const data = reactive({
  current: 1,
  pageSize: 10
})

function handleChangeCurrent(page: number, pageSize: number) {
  data.current = page
  data.pageSize = pageSize
  if (typeof props.getData === 'function') {
    props.getData({
      pageSize: data.pageSize,
      offset: data.current
    })
  }
}
onMounted(() => {
  if (props.isImmediate) {
    handleChangeCurrent(data.current, data.pageSize)
  }
})

function handleChangePageSize(current: number, pageSize: number) {
  handleChangeCurrent(1, pageSize)
}
</script>

<template>
  <div class="page-nation">
    <Pagination
      v-model:current="data.current"
      v-model:page-size="data.pageSize"
      :total="props.total"
      :show-total="(total) => `共 ${total} 条`"
      @change="handleChangeCurrent"
      @showSizeChange="handleChangePageSize"
    />
  </div>
</template>

<style lang="less" scoped>
.page-nation {
  text-align: right;
  margin: 16px 24px;
}
</style>
