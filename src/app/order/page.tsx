'use client'
import OrderCard from '@/app/order/_components/OrderCard'
import Tabs from '@/app/order/_components/Tabs'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import useOrder from '@/features/order/hooks/useOrder'
import { Order } from '@/features/order/types'
import { useState } from 'react'

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'preparing'>('past')
  const { orders, isLoading, isError, refetch } = useOrder()

  const handleTabClick = (tab: 'past' | 'preparing') => {
    setActiveTab(tab)
  }

  if (isError) {
    return <ExceptionScreen refetch={refetch} message="주문을 불러오는 중에 문제가 발생했습니다." />
  }

  if (isLoading) {
    return <LoadingSpinner isFullScreen />
  }

  return (
    <div className="flex h-screen flex-col">
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />

      <div className="flex-1 overflow-y-auto p-4 pb-[4.5rem]">
        {activeTab === 'past' ? (
          <div className="space-y-4">
            {orders?.map((order: Order) => <OrderCard key={order.orderId} order={order} />)}
          </div>
        ) : (
          // 주문 상태에 따라 조회하는 기능 미구현, 임시 코드
          <div className="text-center text-gray-500">준비중인 주문이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default OrderPage
