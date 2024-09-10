'use client'

import { X } from 'lucide-react'

interface Option {
  optionName: string
  optionPrice: number
}

const MenuCard = ({
  menuName,
  options,
  price,
  count,
}: {
  menuName: string
  options: Option[]
  price: number
  count: number
}) => {
  return (
    <article aria-label="Menu Card">
      <section className="flex justify-between py-8">
        <header className="flex flex-col gap-2">
          <h2 className="text-base/[18px]" aria-label="Menu Name">
            {menuName}
          </h2>
          <ul aria-label="Options List">
            {options.map((option, index) => (
              <li key={index} className="text-base/[18px]">
                {option.optionName} (+{option.optionPrice}원)
              </li>
            ))}
          </ul>
          <p className="text-base/[18px]" aria-label="Total Price">
            {price}원
          </p>
        </header>
        <footer className="flex flex-col justify-between">
          <button aria-label="Remove Menu Item">
            <X />
          </button>
          <p className="text-center" aria-label="Item Count">
            {count}
          </p>
        </footer>
      </section>
    </article>
  )
}

export default MenuCard
