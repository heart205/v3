<script setup lang="ts">
import { reactive } from 'vue'
import Card from '../../components/card/card.vue'
const data = reactive([
  {
    title: '文章',
    count: 8
  },
  {
    title: '应用',
    count: 10
  },
  {
    title: '待办事项',
    count: 2,
    total: 10
  },
  {
    title: '消息',
    count: 0
  },
  {
    title: '收藏',
    count: 0
  },
  {
    title: '设置',
    count: 0
  }
])
</script>

<template>
  <div>
    <Card title="快捷导航">
      <div class="flex dash-ul">
        <template v-for="index in 6" :key="index">
          <div class="dash-li">
            <span>
              {{ data[index - 1].count }}
            </span>
            <span>
              {{ data[index - 1].title }}
            </span>
          </div>
        </template>
      </div>
    </Card>
  </div>
</template>

<style lang="less" scoped>
.dash-ul {
  flex-wrap: wrap;
  background-color: var(--background-color);
}
.dash-li {
  width: 33.3%;
  box-sizing: border-box;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:nth-child(3n - 1) {
    box-shadow: -1px 0 var(--box-color), 1px 0 var(--box-color),
      0 -1px var(--box-color);
  }
  &:nth-child(3n-2) {
    box-shadow: -1px -1px var(--box-color), 0 -1px var(--box-color);
  }

  &:nth-child(3n) {
    box-shadow: 1px 0px var(--box-color), 1px -1px var(--box-color);
  }

  &:nth-last-child(-n + 3) {
    border-bottom: 1px solid var(--box-color);
  }
}
</style>
