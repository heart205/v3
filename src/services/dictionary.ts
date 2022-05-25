/**
 * @author heart
 * @description 数据字典
 * @Date 2022-05-25
 */

import type { AxiosPromise } from 'axios'
import type { BaseResponse } from '../types/baseResponse'
import type { DictionaryInterface, dictionaryList } from '../types/dictionary'
import type { mergeObj } from '../types/utils/mergeObject'
import type {
  dateMergeTotal,
  pageNationRequest
} from '../types/utils/tableRequest'
import request from '../utils/request'

export function addDictionaryService(
  data: DictionaryInterface
): AxiosPromise<BaseResponse> {
  return request({
    url: '/sysDict/addData',
    method: 'post',
    data
  })
}

export function searchDictionaryList(
  data: pageNationRequest
): AxiosPromise<BaseResponse<dateMergeTotal<dictionaryList[]>>> {
  return request({
    url: '/sysDict/searchDictionary',
    method: 'post',
    data
  })
}

export function searchDictionaryDetail(data: {
  id: string
}): AxiosPromise<BaseResponse<dictionaryList>> {
  return request({
    url: '/sysDict/searchDictionaryDetail',
    method: 'post',
    data
  })
}

export function editDictionaryService(
  data: mergeObj<
    Pick<DictionaryInterface, Exclude<keyof DictionaryInterface, 'userId'>>,
    { id: number }
  >
): AxiosPromise<BaseResponse> {
  return request({
    url: '/sysDict/editData',
    method: 'post',
    data
  })
}

export function deleteDictionaryService(data: {
  id: number
}): AxiosPromise<BaseResponse> {
  return request({
    url: '/sysDict/deleteData',
    method: 'post',
    data
  })
}
