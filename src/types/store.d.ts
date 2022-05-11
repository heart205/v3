import type { config } from '../store/modules/config'
export interface systemConfig {
  pageNotFoundIsContainContent: boolean
  sideBarDeepNumber: number
}

export interface storeImpl {
  config: config
}
