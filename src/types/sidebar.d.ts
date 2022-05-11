import type Logo from '../layout/sideBar/logo.vue'

export interface ItemConfig {
  path: string
  name: string
  key: string | number
  type: 'subMenu' | 'menuItem'
  children?: ItemConfig[]
}

export type LogoType = Logo
