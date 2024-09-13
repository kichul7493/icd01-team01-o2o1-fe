export interface Address {
  addressId: number
  latitude: number
  longitude: number
  address: string
  addressDetail: string
  zipCode: string
  addressStatus: 'main' | 'sub'
}

export interface AddressesResponseData {
  response: {
    addresses: Address[]
  }
  statusCode: number
  msg: string
}
