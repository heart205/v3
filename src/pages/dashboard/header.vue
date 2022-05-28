<script setup lang="ts">
import { useGeolocation } from './hooks/useGeolocation'
import { getTemperature } from '../../services/dashBoard'
import { shallowReactive } from 'vue'
import type { temperatureInterface } from '../../types/services/dashBoard'
const baseInfo = shallowReactive<{
  weather: temperatureInterface | Record<string, unknown>
}>({
  weather: {}
})
useGeolocation().then(({ coords }) => {
  const { latitude, longitude } = coords
  getTemperature({
    lat: String(latitude),
    lon: String(longitude)
  })
    .then((res) => {
      const { data } = res
      if (data.code == 200) {
        baseInfo.weather = data.data || {}
      }
    })
    .catch((e) => {
      console.log(e.message)
    })
})
</script>

<template>
  <div class="page-header">
    <div class="flex">
      <!-- 头像 -->
      <span class="avatar">
        <img src="../../assets/images/avator.jpg" alt="" />
      </span>
      <div class="introduce ml-4">
        <h2>早安 {{ 'heart' }}</h2>
        <p>
          <template v-if="baseInfo.weather.weatherInfo">
            今日 {{ baseInfo.weather.weatherInfo }}，
          </template>
          <template v-if="baseInfo.weather.currentTemperature">
            <span>当前温度: {{ baseInfo.weather.currentTemperature }}</span>
          </template>
        </p>
      </div>
      <div class="matter">
        <div>
          <span>文章</span>
          <span>8</span>
        </div>
        <div>
          <span>应用</span>
          <span>10</span>
        </div>
        <div>
          <span>待办事项</span>
          <span>2 / 10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@color: #6a6c6e;
@matter-color: #757575;
.page-header {
  height: 120px;
  padding: 16px 24px;
  box-sizing: border-box;
  background-color: var(--background-color);
  border: 1px solid #eee;
  & > div {
    height: 100%;
    align-items: center;
    & > div {
      &:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
          font-size: 18px;
        }
        p {
          color: @color;
        }
      }
      &:nth-of-type(2) {
        flex: 1;
        display: flex;
        justify-content: right;
      }
    }
    & > span {
      display: inline-block;
      width: 72px;
      height: 72px;
      border-radius: 50%;
      overflow: hidden;
      img {
        // object-fit 的使用：
        object-fit: cover;
      }
    }
  }
}
.matter {
  & > div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    align-items: center;
    position: relative;
    & + div {
      &::after {
        content: '';
        height: 48px;
        width: 1px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-left: 1px solid #eee;
      }
    }
    & > span {
      &:nth-child(1) {
        color: @matter-color;
        margin-bottom: 12px;
      }
      &:nth-child(2) {
        font-size: 22px;
      }
    }
  }
}
</style>
