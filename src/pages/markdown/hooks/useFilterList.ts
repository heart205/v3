import { reactive, markRaw } from 'vue'
import type { FilterList } from '../../../types/services/markdown'

export function useFilterList() {
  const filterList = reactive<{
    filterList: FilterList[]
    activeKey: string
  }>({
    filterList: markRaw([
      {
        title: '全部',
        field: 'total',
        num: 0
      },
      {
        title: '已发布',
        field: 'examinationPassed',
        num: 0
      },
      {
        title: '审核中',
        field: 'underReview',
        num: 0
      },
      {
        title: '未通过',
        field: 'auditNotPassed',
        num: 0
      }
    ]),
    activeKey: 'total'
  })
  return filterList
}
