import type { config } from '../store/modules/config'
import type store from '../store/index'
import type { Store } from 'vuex'

type sideBarTheme = 'light' | 'dark'
export interface systemConfig {
  pageNotFoundIsContainContent: boolean
  sideBarDeepNumber: number
  sideBarTheme: sideBarTheme
  toggle: boolean
}
export interface storeImpl {
  // export function useStore<S = any>(injectKey?: InjectionKey<Store<S>> | string): Store<S>;
  // 因此 直接 将state的数据 传给 store中的数据就行了 useStore<storeImpl> === { config : systemConfig }
  config: systemConfig
}

export type ActionState<T extends string> = T extends storeImpl[number]
  ? storeImpl[T]
  : never

type a = ActionState<'config'>
