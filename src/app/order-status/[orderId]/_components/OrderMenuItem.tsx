import { Menu } from '@/features/orderStatus/types'
import React from 'react'

interface OrderMenuItemProps {
  menu: Menu
}

const OrderMenuItem = ({ menu }: OrderMenuItemProps) => {
  return (
    <div className="mb-3 flex gap-3">
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
  )
}

export default OrderMenuItem
