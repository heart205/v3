import fs from 'fs'
import path from 'path'
//TODO: 待完成
// npm 官方文档的这样介绍 dotenv: Dotenv 是一个零依赖的模块，它能将环境变量中的变量从 .env 文件加载到 process.env 中。
import dotenv from 'dotenv'

// 是否是生产环境
export function isDevFn(mode: string): boolean {
  return mode === 'development'
}

//生产环境
export function isProdFn(mode: string): boolean {
  return mode === 'production'
}

// 暂时不只到作用
export function isReportMode(): boolean {
  return process.env.REPORT === 'true'
}

// export function getEnvConfig(match = 'VITE_GLOB_', confFiles = )
