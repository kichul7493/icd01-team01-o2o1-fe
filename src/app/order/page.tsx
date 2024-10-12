'use client'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import OrderCard from '@/app/order/_components/OrderCard'
import Tabs from '@/app/order/_components/Tabs'
import useOrder from '@/features/order/hooks/useOrder'
import { Order } from '@/features/order/types'
import { useState } from 'react'

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'preparing'>('past')
  const { orders } = useOrder()

  const handleTabClick = (tab: 'past' | 'preparing') => {
    setActiveTab(tab)
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
          <div className="text-center text-gray-500">준비중인 주문이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default OrderPage
