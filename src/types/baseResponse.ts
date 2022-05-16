export interface BaseResponse<T = null | undefined> {
  code: number
  message: string
  data?: T
}
