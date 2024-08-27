// 주문 상태 타입 정의
export type OrderStatus = 'pending' | 'accepted' | 'preparing' | 'delivering' | 'delivered'

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
  latitude: string
  longitude: string
  address: string
  addressDetail: string
  zipCode: string
}

// 주문 타입 정의
export interface Order {
  orderId: number
  orderTime: string
  orderStatus: OrderStatus
  orderPrice: number
  storeId: number
  storeName: string
  menus: Menu[]
  address: Address
}
