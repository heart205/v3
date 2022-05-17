import type { config } from '../store/modules/config'
import type store from '../store/index'
import type { Store } from 'vuex'
import type { User } from './store/user'
type sideBarTheme = 'light' | 'dark'

export interface Tabs {
  name: string
  path: string | number
}
export interface systemConfig {
  pageNotFoundIsContainContent: boolean
  sideBarDeepNumber: number
  sideBarTheme: sideBarTheme
  toggle: boolean
  isSystemCollapsed: boolean
  footerHeight: number
  tabsList: Tabs[]
  isShowTabsList: boolean
}
export interface storeImpl {
  // export function useStore<S = any>(injectKey?: InjectionKey<Store<S>> | string): Store<S>;
  // 因此 直接 将state的数据 传给 store中的数据就行了 useStore<storeImpl> === { config : systemConfig }
  config: systemConfig
  user: User
}

export type ActionState<T extends string> = T extends storeImpl[number]
  ? storeImpl[T]
  : never

type a = ActionState<'config'>
