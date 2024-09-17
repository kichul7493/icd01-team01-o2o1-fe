import axiosInst from '@/util/axiosInst'
import { StoreResponse } from '../types'
import { Address } from '@/features/member/types'

export const getStoreDetailInfo = async (storeId: string) => {
  const { data } = await axiosInst.get<StoreResponse>(`/store/${storeId}`)
  return data.response
}

export interface StoreListRequest {
  address: Address
  category?: string
  page?: number
  size?: number
  keyword?: string
}

export const getStoreList = async (req: StoreListRequest) => {
  const res = await axiosInst.post(`/store`, {
    ...req,
  })
  const { page, size, totalCount } = res.data

  const nextPage = totalCount > page * size ? page + 1 : null

  return {
    data: res.data.response,
    nextPage,
  }
}
