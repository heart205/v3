export interface ItemConfig {
  path: string
  name: string
  key: string | number
  type: 'subMenu' | 'menuItem'
  children?: ItemConfig[]
}
