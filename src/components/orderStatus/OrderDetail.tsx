import { Menu } from '@/features/orderStatus/types'
import React from 'react'
import OrderMenuItem from './OrderMenuItem'

interface OrderDetailProps {
  orderId: number
  storeName: string
  menuList: Menu[]
  totalPrice: string
}

const OrderDetail = ({ orderId, storeName, menuList, totalPrice }: OrderDetailProps) => {
  return (
    <div className="flex flex-col gap-6 pt-5">
      <p className="text-xl font-semibold">{orderId} 주문</p>
      <p>{storeName}</p>
      {menuList.map((menu) => (
        <OrderMenuItem key={menu.menuId} menu={menu} />
      ))}

      <div>
        <p className="ml-10 text-xl font-semibold">합계: {totalPrice}원</p>
      </div>
    </div>
  )
}

export default OrderDetail
