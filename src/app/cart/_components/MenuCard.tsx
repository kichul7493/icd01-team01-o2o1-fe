'use client'

import { X } from 'lucide-react'

import { MenuType } from '@/features/cart/types'
import {
  useDeleteMenuFromCart,
  useGetMenuPriceWithTotalOption,
  useChangeMenuStock,
} from '@/features/cart/hooks/useManageCart'
import { PlusButton, CartMinusButton } from '@/components/shared/StockChangeButton'

const MenuCard = ({ menuName, menuPrice, menuCount, optionGroups, menuId }: MenuType) => {
  const totalOptionPrice = optionGroups.reduce(
    (total: any, group: any) =>
      total +
      group.options.reduce((groupTotal: any, option: any) => groupTotal + option.optionPrice, 0),
    0,
  )

  const useDeleteMenu = () => useDeleteMenuFromCart(menuId)
  const useIncreaseStock = () => useChangeMenuStock(menuId, 1)
  const useDecreaseStock = () => useChangeMenuStock(menuId, -1)

  return (
    <article aria-label="Menu Card">
      <section className="flex justify-between py-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-base/[18px]" aria-label="Menu Name">
            {menuName}
          </h2>
          <ul aria-label="Options List" className="flex flex-col gap-1 pl-2">
            {optionGroups?.map((group) => (
              <li key={group.optionGroupId} className="text-sm/[14px]">
                {group.optionGroupName}
                <p className="pl-2 pt-1 text-sm/[14px]">
                  {group.options?.map((option) => (
                    <span key={option.optionId} className="flex items-center gap-1">
                      {option.optionName} (+{option.optionPrice.toLocaleString()}원)
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
          <p className="text-base/[18px]" aria-label="Total Price">
            {useGetMenuPriceWithTotalOption(menuPrice, totalOptionPrice, menuCount)}원
          </p>
        </header>
        <footer className="flex flex-col justify-between">
          <button
            aria-label="Remove Menu Item"
            className="flex justify-end"
            onClick={useDeleteMenu}
          >
            <X />
          </button>
          <div className="flex items-center gap-3">
            <CartMinusButton menuStock={menuCount} onClick={useDecreaseStock} />
            <span className="w-4 text-center">{menuCount}</span>
            <PlusButton onClick={useIncreaseStock} />
          </div>
        </footer>
      </section>
    </article>
  )
}

export default MenuCard
