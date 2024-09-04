import { cn } from '@/lib/utils'
import { Dot } from 'lucide-react'
import React from 'react'

interface OrderStatusItemProps {
  isActivated: boolean
  name: string
}

const OrderStatusItem = ({ isActivated, name }: OrderStatusItemProps) => {
  return (
    <li className="flex">
      <Dot className={isActivated ? 'text-main' : ''} />
      <p
        className={cn('font-semibold', {
          'text-main': isActivated,
        })}
      >
        {name}
      </p>
    </li>
  )
}

export default OrderStatusItem
