import { Address } from '@/features/member/types'
import axiosInst from '@/util/axiosInst'
import { AddressData } from '../types'

type AddressListResponseType = {
  response: {
    addresses: AddressData[]
  }
  statusCode: number
  msg: string
}

type AddressResponseType = {
  response: {
    addressId: number
  }
  statusCode: number
  msg: string
}

export const getAddressList = async () => {
  const { data } = await axiosInst.get<AddressListResponseType>('/address')
  return data.response
}

export const postAddress = async (addressData: Address) => {
  const { data } = await axiosInst.post<AddressResponseType>('/address', addressData)
  return data.response
}

export const updateMainAddress = async (addressId: number) => {
  const { data } = await axiosInst.put<AddressResponseType>(`/address/${addressId}`)
  return data.response
}

export const deleteAddress = async (addressId: number) => {
  const { data } = await axiosInst.delete<AddressResponseType>(`/address/${addressId}`)
  return data.response
}
