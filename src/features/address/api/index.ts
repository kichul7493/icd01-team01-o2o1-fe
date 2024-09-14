import { Address } from '@/features/member/types'
import axiosInst from '@/util/axiosInst'
import { AddressData } from '../types'

type AddressResponseType = {
  response: {
    addressId: number
  }
  statusCode: number
  msg: string
}

export const getAddressList = async () => {
  const { data } = await axiosInst.get<Promise<{ addresses: AddressData[] }>>('/address')
  return data
}

export const postAddress = async (addressData: Address) => {
  const { data } = await axiosInst.post<Promise<AddressResponseType>>('/address', addressData)
  return data
}

export const updateMainAddress = async (addressId: number) => {
  const { data } = await axiosInst.put<Promise<AddressResponseType>>(`/address/${addressId}`)
  return data
}

export const deleteAddress = async (addressId: number) => {
  const { data } = await axiosInst.delete<Promise<AddressResponseType>>(`/address/${addressId}`)
  return data
}
