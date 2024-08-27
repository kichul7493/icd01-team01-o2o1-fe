'use client'

import React from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import OrderDetail from '@/components/orderStatus/OrderDetail'
import OrderTrackMap from '@/components/orderStatus/OrderTrackMap'
import OrderStatusTrack from '@/components/orderStatus/OrderStatusTrack'
import { useParams } from 'next/navigation'
import { useOrderStatus } from '@/features/order-status/hooks'

const OrderStatusScreen = () => {
  const params = useParams<{ orderId: string }>()

  const { orderId } = params

  const { data, isLoading } = useOrderStatus(orderId)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Order not found</div>
  }

  const { response } = data

  return (
    <div>
      <div className="absolute top-0 z-50 w-full p-4">
        <Link href={'/'}>
          <X />
        </Link>
      </div>
      <div className="h-[240px] w-full">
        <OrderTrackMap
          storeAdress={data.response.store.storeAddress}
          userAddress={data.response.address}
        />
      </div>
      <div className="mx-6 py-5">
        <OrderStatusTrack
          status={response.orderStatus}
          address={`${response.address.address} ${response.address.addressDetail}`}
        />
        <OrderDetail
          orderId={response.orderId}
          storeName={response.storeName}
          menuList={response.menus}
          totalPrice={`${response.orderPrice.toLocaleString()}`}
        />
      </div>
    </div>
  )
}

export default OrderStatusScreen
