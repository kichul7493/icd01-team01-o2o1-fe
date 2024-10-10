'use client'
import OrderCard from '@/app/order/_components/OrderCard'
import Tabs from '@/app/order/_components/Tabs'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import useOrderData from '@/mocks/handlers/order'
import { useState } from 'react'

interface Order {
  id: number
  storeName: string
  date: string
  deliveryStatus: 'Delivered' | 'Pending'
  menuItems: { name: string; quantity: number }[]
  totalAmount: number
}

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'past' | 'preparing'>('past')
  const { useOrderQuery } = useOrderData()
  const { data: orders, error: orderError, isLoading: orderLoading } = useOrderQuery()
  const handleTabClick = (tab: 'past' | 'preparing') => {
    setActiveTab(tab)
  }
  if (orderLoading) return <LoadingSpinner isFullScreen size="lg" />
  if (orderError instanceof Error) return <div>에러 발생</div>

  return (
    <div className="flex h-screen flex-col">
      <Tabs activeTab={activeTab} onTabClick={handleTabClick} />

      <div className="flex-1 overflow-y-auto p-4 pb-[4.5rem]">
        {activeTab === 'past' ? (
          <div className="space-y-4">
            {orders.map((order: Order) => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">준비중인 주문이 없습니다.</div>
        )}
      </div>
    </div>
  )
}

export default OrderPage
