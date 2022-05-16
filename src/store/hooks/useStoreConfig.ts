/**
 * @author heart
 * @description 获取config的hook
 * @Date 2022-05-11
 */
import { useStore } from 'vuex'
import type { storeImpl } from '../../types/store'
export function useFactoryStore<T extends keyof storeImpl>(
  str: T
): storeImpl[T] {
  const store = useStore<storeImpl>()
  return store.state[str]
}

export function useStoreConfig() {
  return useFactoryStore('config')
}

export function useStoreUser() {
  return useFactoryStore('user')
}
