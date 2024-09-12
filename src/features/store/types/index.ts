export interface StoreResponse {
  response: {
    storeId: number
    storeName: string
    contactNumber: string
    zipCode: string
    address: string
    addressDetail: string
    latitude: number
    longitude: number
    openTime: string
    closeTime: string
    category: string
    deliveryArea: string
    minimumPrice: number
    reviewCount: number
    reviewRate: number
    thumbnails: string[]
    menus: {
      menuId: number
      menuName: string
      description: string
      menuPrice: number
      menuImages: string[]
      optionGroups: {
        optionGroupId: number
        optionGroupName: string
        isRequired: boolean
        isMultiple: boolean
        options: {
          optionId: number
          optionName: string
          optionPrice: number
        }[]
      }[]
    }[]
  }
  statusCode: number
  msg: string
}
