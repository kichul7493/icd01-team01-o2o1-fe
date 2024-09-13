import axiosInst from '@/util/axiosInst'
import { AddressesResponseData } from '../types'

export const getAddresses = async () => {
  const { data } = await axiosInst.get<AddressesResponseData>('/address')
  return data
}
