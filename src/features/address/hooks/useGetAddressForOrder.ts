import { AddressData } from '../types'

interface FormattedAddress {
  addressId: number
  latitude: string
  longitude: string
  address: string
  addressDetail: string
  zipCode: string
}

const useGetAddressForOrder = (rawAddress: AddressData): FormattedAddress => {
  return {
    addressId: rawAddress?.addressId,
    latitude: rawAddress?.latitude.toFixed(4),
    longitude: rawAddress?.longitude.toFixed(4),
    address: rawAddress?.address,
    addressDetail: rawAddress?.addressDetail,
    zipCode: rawAddress?.zipCode,
  }
}

export default useGetAddressForOrder
