export interface articleDetailsInfo {
  userId: number
  content: string
  title: string
}

export interface FilterList {
  title: string
  field: string
  num: number
}

export interface ArticleList {
  id: number

  userId: number

  content: string

  title: string

  createTime: Date

  updateTime: Date

  readNumbers: number

  // 点赞次数
  likeNumber: number

  // 评论次数
  commonNumber: number

  // 收藏次数
  collectNumber: number
}

export interface articleDetail {
  data: ArticleList[]
  total: number
}

type UpdateArticle = 'title' | 'content' | 'id' | 'userId'
export type UpdateArticleData = {
  [K in UpdateArticle]: ArticleList[K]
}
