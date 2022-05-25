/**
 * @author heart
 * @description 合并两个对象
 * @Date 2022-05-22
 */
export type mergeObj<
  T extends Record<Extract<keyof any, string>, unknown>,
  U extends Record<Extract<keyof any, string>, unknown>
> = {
  [k in keyof T | keyof U]: k extends keyof T
    ? T[k]
    : k extends keyof U
    ? U[k]
    : never
}
