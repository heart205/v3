import request from '../utils/request'
import type {
  articleDetailsInfo,
  UpdateArticleData
} from '../types/services/markdown'
import type { BaseResponse } from '../types/baseResponse'
import type { AxiosPromise } from 'axios'
import type { ArticleList } from '../types/services/markdown'
export function addArticle(
  data: articleDetailsInfo
): AxiosPromise<BaseResponse> {
  return request({
    url: '/article/addArticleInfo',
    method: 'post',
    data
  })
}

// 获取文章列表信息
export function getArticleList(
  userId: number
): AxiosPromise<BaseResponse<ArticleList[]>> {
  return request({
    url: '/article/getArticleDetail',
    method: 'post',
    data: {
      userId
    }
  })
}

export function handleEditArticleApi(
  data: UpdateArticleData
): AxiosPromise<BaseResponse> {
  return request({
    url: '/article/updateArticleInfo',
    method: 'post',
    data
  })
}

export function getEditArticleInfo(data: {
  id: number
}): AxiosPromise<BaseResponse<ArticleList>> {
  return request({
    url: '/article/getArticleDetailsInfo',
    method: 'post',
    data
  })
}
