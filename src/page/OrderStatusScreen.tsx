'use client'

import React from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import OrderDetail from '@/components/orderStatus/OrderDetail'
import OrderTrackMap from '@/components/orderStatus/OrderTrackMap'
import OrderStatusTrack from '@/components/orderStatus/OrderStatusTrack'
import { useParams, useRouter } from 'next/navigation'

import { useOrderStatus } from '@/features/orderStatus/hooks/useOrderStatus'
import { useCancelOrder } from '@/features/orderStatus/hooks/useCancelOrder'

const OrderStatusScreen = () => {
  const params = useParams<{ orderId: string }>()
  const router = useRouter()

  const { orderId } = params

  const { data, isLoading } = useOrderStatus(orderId)

  const { handleCancelOrder } = useCancelOrder({
    orderId,
    onSuccessCallback: () => {
      router.push('/')
    },
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data) {
    return <div>Order not found</div>
  }

  const { response } = data

  return (
    <div className="pb-20">
      <div className="absolute top-0 z-50 w-full p-4">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            router.back()
          }}
        >
          <X />
        </Link>
      </div>
      <div className="h-[240px] w-full">
        <OrderTrackMap storeAdress={response.store.storeAddress} userAddress={response.address} />
      </div>
      <div className="mx-6 py-5">
        <OrderStatusTrack
          orderId={response.orderId}
          status={response.orderStatus}
          address={`${response.address.address} ${response.address.addressDetail}`}
          handleCancelOrder={handleCancelOrder}
        />
        <OrderDetail
          orderId={response.orderId}
          storeName={response.store.storeName}
          menuList={response.menus}
          totalPrice={`${response.orderPrice.toLocaleString()}`}
        />
      </div>
    </div>
  )
}

export default OrderStatusScreen
