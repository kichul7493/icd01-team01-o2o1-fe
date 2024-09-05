import { OrderStatus } from '@/features/orderStatus/types'
import { Dot } from 'lucide-react'
import React from 'react'
import { useStreamOrderStatus } from '@/features/orderStatus/hooks/useStreamOrderStatus'
import { OrderStatusItemList } from '@/constants/order'
import OrderStatusItem from './OrderStatusItem'
import OrderCancelDialog from './OrderCancelDialog'

interface OrderDetailProps {
  orderId: number
  status: OrderStatus
  address: string
}

const OrderStatusTrack = ({ orderId, status, address }: OrderDetailProps) => {
  const { orderStatus } = useStreamOrderStatus({ orderId, initStatus: status })

  return (
    <div className="border-b-2">
      {/* 주문 수락 전 */}
      {orderStatus === 'pending' && (
        <>
          <div className="mb-8 flex items-center gap-4">
            <Dot className="text-main" />
            <p className="text-base font-semibold text-main">매장에서 주문을 확인하고 있습니다.</p>
          </div>
          <div className="mb-12 flex flex-col items-center gap-4">
            <OrderCancelDialog />
            <p className="text-sm">매장에서 조리를 시작하면 취소 할 수 없습니다.</p>
          </div>
        </>
      )}
      {/* 주문 수락 후 */}
      {orderStatus !== 'pending' && (
        <ul className="mb-6 ml-6 mt-6 flex flex-col gap-4">
          {OrderStatusItemList.map((item) => (
            <OrderStatusItem
              key={item.status}
              name={item.name}
              isActivated={orderStatus === item.status}
            />
          ))}
        </ul>
      )}
      <div className="flex flex-col gap-4 pb-12">
        <p className="text-xl font-semibold">배달 주소</p>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default OrderStatusTrack
