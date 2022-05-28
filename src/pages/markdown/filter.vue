<script setup lang="ts">
import { useFilterList } from './hooks/useFilterList'
import type { FilterList, statusLength } from '../../types/services/markdown'
import { getStatusNumberService } from '../../services/markdown'

const data = useFilterList()

async function getStatusNumber(id: number): Promise<statusLength> {
  try {
    const { data } = await getStatusNumberService(id)
    if (data.code == 200 && data.data) {
      return data.data
    }
    throw new Error(data.message)
  } catch (e: any) {
    return e.message
  }
}
getStatusNumber(1)
  .then((res) => {
    data.filterList = data.filterList.map((val) => {
      val.num = res[val.field]
      return { ...val }
    })
  })
  .catch((e) => {
    console.log(e)
  })
function handleClick(item: FilterList, index: number) {
  data.activeKey = item.field
}
</script>

<template>
  <div class="filter">
    <template v-for="(item, index) in data.filterList">
      <span
        @click="handleClick(item, index)"
        :class="{ 'active-toggle-filter': data.activeKey === item.field }"
      >
        <span>
          {{ item.title }}
        </span>
        <span> ({{ item.num }}) </span>
      </span>
    </template>
  </div>
</template>

<style lang="less" scoped>
@borderColor: rgb(238, 238, 238);
@hoverColor: #1890ff;
@clickColor: #1890ff;
.filter {
  padding: 0 8px;
  & > span {
    color: var(--text);
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    &:nth-child(n):not(:last-child) {
      border-right: 1px solid @borderColor;
    }

    & > span {
      font-weight: 500;
    }
    &:hover {
      color: @hoverColor;
    }
  }

  .active-toggle-filter {
    color: @clickColor;
  }
}
</style>
