import { reactive } from 'vue'
import type { FilterList } from '../../../types/services/markdown'
export function useFilterList() {
  const filterList = reactive<{
    filterList: FilterList[]
    activeKey: string
  }>({
    filterList: [
      {
        title: '全部',
        field: 'all',
        num: 1
      },
      {
        title: '已发布',
        field: 'unfinished',
        num: 0
      },
      {
        title: '审核中',
        field: 'finished',
        num: 0
      },
      {
        title: '未通过',
        field: 'unPass',
        num: 0
      }
    ],
    activeKey: 'all'
  })
  return filterList
}
