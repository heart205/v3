interface pageNationRequest {
  pageSize: number
  offset: number
}

export type pageNationMerge<T extends Record<string, unknown>> = {
  [k in keyof T | keyof pageNationRequest]: k extends keyof pageNationRequest
    ? pageNationRequest[k]
    : T[k]
}

export type dateMergeTotal<T, U extends number = number> = {
  list: T
  total: U
}
