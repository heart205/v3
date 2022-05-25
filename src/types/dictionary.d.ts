export interface DictionaryInterface {
  dictionaryName: string
  dictionaryCode: string
  describe: string
  userId: string | number
}

export type SearchInterface = {
  userId?: number | string
}

// 后端接口值
export interface dictionary {
  id: number
  code: string
  name: string
  description: string
  status: number
  orderType: number
  createUserId: number
  createTime: Date
  updateTime: Date
  isDelete: number
}

export type dictionaryList = Omit<dictionary, 'isDelete'>
