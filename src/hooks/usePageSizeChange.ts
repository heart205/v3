import type { pageNationRequest } from '../types/utils/tableRequest'

export function usePageSizeChange<T extends pageNationRequest>(
  data: T,
  callback: (...args: any[]) => void
) {
  function change(page: number, pageSize: number) {
    data.offset = page
    data.pageSize = pageSize
    callback()
  }
  function handlePageSizeChange(current: number, size: number) {
    change(1, size)
  }
  return [change, handlePageSizeChange]
}
