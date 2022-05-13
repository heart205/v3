import type Logo from '../layout/sideBar/logo.vue'
import type { meta } from './router'

export interface ItemConfig {
  path: string
  name: string
  key: string | number
  type: 'subMenu' | 'menuItem'
  children?: ItemConfig[]
  icon?: string
}

export type LogoType = Logo
