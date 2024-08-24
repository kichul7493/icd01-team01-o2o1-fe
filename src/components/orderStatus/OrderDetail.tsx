import React from 'react'

interface OrderDetailProps {
  orderId: string
  storeName: string
  orderList: {
    name: string
    option: string
    count: number
  }[]
  totalPrice: string
}

const OrderDetail = ({ orderId, storeName, orderList, totalPrice }: OrderDetailProps) => {
  return (
    <div className="flex flex-col gap-6 pt-5">
      <p className="text-xl font-semibold">{orderId} 주문</p>
      <p>{storeName}</p>
      {orderList.map((order, index) => (
        <div key={order.name} className="mb-3 flex gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-300">
            {order.count}
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-sm">{order.name}</p>
            <p className="text-sm">{order.option}</p>
          </div>
        </div>
      ))}

      <div>
        <p className="ml-10 text-xl font-semibold">합계: {totalPrice}원</p>
      </div>
    </div>
  )
}

export default OrderDetail
