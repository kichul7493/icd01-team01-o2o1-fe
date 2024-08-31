import { Menu } from '@/features/orderStatus/types'
import React from 'react'

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
        <div key={menu.menuId} className="mb-3 flex gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300">
            {menu.menuCount}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm">{menu.menuName}</p>
            {menu.optionGroup.map((option) => (
              <div key={option.optionGroupId} className="flex gap-2 text-sm">
                {option.option.map((optionItem) => (
                  <p key={optionItem.optionId}>{optionItem.optionName}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <p className="ml-10 text-xl font-semibold">합계: {totalPrice}원</p>
      </div>
    </div>
  )
}

export default OrderDetail
