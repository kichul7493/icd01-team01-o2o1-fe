// 주문 상태 타입 정의
export type OrderStatus =
  | 'pending'
  | 'accepted'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

// 옵션 타입 정의
export interface Option {
  optionId: number
  optionName: string
}

// 옵션 그룹 타입 정의
export interface OptionGroup {
  optionGroupId: number
  optionGroupName: string
  option: Option[]
}

// 메뉴 타입 정의
export interface Menu {
  menuId: number
  menuName: string
  menuCount: number
  optionGroup: OptionGroup[]
}

// 주소 타입 정의
export interface Address {
  addressId: number
  latitude: number
  longitude: number
  address: string
  addressDetail: string
  zipCode: string
}

export interface Store {
  storeId: 2
  storeName: string
  storeAddress: Address
}

// 주문 타입 정의
export interface Order {
  orderId: number
  orderTime: string
  orderStatus: OrderStatus
  orderPrice: number
  store: Store
  menus: Menu[]
  orderAddress: Address
}
