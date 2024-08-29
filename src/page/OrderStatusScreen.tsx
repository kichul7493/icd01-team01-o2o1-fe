import React from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import OrderDetail from '@/components/orderStatus/OrderDetail'
import OrderTrackMap from '@/components/orderStatus/OrderTrackMap'
import OrderStatusTrack from '@/components/orderStatus/OrderStatusTrack'

const OrderStatusScreen = () => {
  return (
    <div>
      <div className="absolute top-0 w-full p-4">
        <Link href={'/'}>
          <X />
        </Link>
      </div>
      <OrderTrackMap />
      <div className="mx-6 py-5">
        <OrderStatusTrack
          remainingDeliveryTime={15}
          status="preparing"
          address="서울특별시 관악구 OO아파트"
          orderArrivalTime="오후 05:18"
        />
        <OrderDetail
          orderId="OYWORO"
          storeName="굽네치킨 미아점"
          orderList={[{ name: '후라이드치킨', option: '순살', count: 1 }]}
          totalPrice="16,000"
        />
      </div>
    </div>
  )
}

export default OrderStatusScreen
