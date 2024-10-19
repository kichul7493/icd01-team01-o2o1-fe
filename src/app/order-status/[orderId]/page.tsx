'use client'

import { useOrderStatus } from '@/features/order/hooks/useOrderStatus'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import OrderStatusTrack from './_components/OrderStatusTrack'
import OrderDetail from './_components/OrderDetail'
import OrderTrackMap from './_components/OrderTrackMap'
import OrderStatusSkeleton from './_components/OrderStatusSkeleton'
import BackButton from '@/components/shared/BackButton'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'

export default function OrderStatusPage() {
  const router = useRouter()

  const { data, isLoading, isError, refetch } = useOrderStatus()

  if (isLoading) {
    return <OrderStatusSkeleton />
  }

  if (isError) {
    return (
      <ExceptionScreen refetch={refetch} message="주문 상태를 불러오는 중에 문제가 발생했습니다" />
    )
  }

  if (!data) {
    return (
      <div>
        <BackButton />
        <div className="flex items-center justify-center">주문이 없습니다.</div>
      </div>
    )
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
        <OrderTrackMap
          storeAdress={response.store.storeAddress}
          userAddress={response.orderAddress}
        />
      </div>
      <div className="mx-6 py-5">
        <OrderStatusTrack
          orderId={response.orderId}
          status={response.orderStatus}
          address={`${response.orderAddress.address} ${response.orderAddress.addressDetail}`}
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
