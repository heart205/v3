<script setup lang="ts">
import Header from './header.vue'
import Article from './article.vue'
import Dash from './dash.vue'
import Card from '../../components/card/card.vue'
import TimeLine from './timeLine.vue'
</script>

<template>
  <div>
    <div class="dash-board">
      <Header />
      <div class="dash-content">
        <div>
          <Article />
        </div>
        <div class="aside flex flex-col">
          <Dash />
          <div class="aside-img">
            <img src="../../assets/images/asider-img.png" alt="" />
          </div>
          <div class="record flex-1 bg-white">
            <!-- 数据埋点展示 -->
            <Card title="最新动态">
              <div class="new-dynamics">
                <TimeLine />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('../../assets/theme/layout.less');
.dash-board {
  padding: 8px;
}
.dash-content {
  display: flex;
  padding: 12px 0;
  & > div {
    &:nth-child(1) {
      flex: 4;
    }
    &:nth-child(2) {
      flex: 2;
    }
  }
}
.aside {
  margin: 0 0 0 12px;
  .aside-img {
    height: 240px;
    margin: 14px 0;
    background-color: @bg-color;
    img {
      height: 100%;
      margin: auto;
      object-fit: cover;
    }
  }
}
.new-dynamics {
  padding: 12px;
}
</style>
