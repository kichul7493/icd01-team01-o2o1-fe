import { Address } from '@/features/member/types'
import axiosInst from '@/util/axiosInst'

type SignUpResponseType = {
  response: {
    addressId: number
  }
  statusCode: number
  msg: string
}

export const postAddress = async (addressData: Address) => {
  const { data } = await axiosInst.post<Promise<SignUpResponseType>>('/address', addressData)
  return data
}
