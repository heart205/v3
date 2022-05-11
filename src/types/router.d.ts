import type { Component } from 'vue'

interface meta {
  hidden?: boolean
  title?: string
  icon?: string
  tab?: string
  nav?: boolean
  sideBarType?: 'subMenu' | 'menuItem'
  [key: string | symbol | number]: unknown
}
export interface RouterConfig {
  path: string
  name: string
  component: Component
  children?: RouterConfig[]
  redirect?: string
  meta?: meta
}
