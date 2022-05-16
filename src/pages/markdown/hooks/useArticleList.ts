/**
 * @author heart
 * @description 获取文章列表
 * @Date 2022-05-16
 */

import {
  getArticleList,
  handleEditArticleApi
} from '../../../services/markdown'
import type { BaseResponse } from '../../../types/baseResponse'
import type { ArticleList } from '../../../types/services/markdown'

export function getArticleListFunc(userId: number): Promise<ArticleList[]> {
  return new Promise((resolve, reject) => {
    getArticleList(userId).then((res) => {
      const { data } = res
      if (data.code === 200 && data.data) {
        resolve(data.data)
      }
      reject(data)
    })
  })
}

export function handleEditArticle(
  data: { id: number } & ArticleList
): Promise<BaseResponse> {
  return new Promise((resolve, reject) => {
    handleEditArticleApi(data).then((res) => {
      const { data } = res
      if (data.code === 200) {
        resolve(data)
      }
      reject(data)
    })
  })
}
