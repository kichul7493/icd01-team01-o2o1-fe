import axiosInst from '@/util/axiosInst'
import { Review } from '../types'

export const getReviews = async (storeId: string, pageParam: number) => {
  const res = await axiosInst.get<{
    response: {
      storeName: string
      reviews: Review[]
      page: number
      size: number
      totalCount: number
    }
  }>(`/store/${storeId}/reviews?page=${pageParam}`)

  const { page, size, totalCount } = res.data.response

  const nextPage = totalCount > page * size ? page + 1 : null

  return {
    ...res.data,
    nextPage,
  }
}
