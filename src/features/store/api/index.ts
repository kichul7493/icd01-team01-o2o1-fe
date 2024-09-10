import axiosInst from '@/util/axiosInst'
import { StoreResponse } from '../types'

export const getStoreDetailInfo = async (storeId: string) => {
  const { data } = await axiosInst.get<StoreResponse>(`/store/${storeId}`)
  return data.response
}
