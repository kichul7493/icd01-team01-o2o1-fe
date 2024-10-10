'use client'
import { Order } from '@/features/order/types'
import Link from 'next/link'
import * as React from 'react'

export default function OrderCard({ order }: { order: Order }) {
  return (
    <div className="flex flex-col rounded-lg border p-4">
      <h3 className="text-2xl font-bold">{order.storeName}</h3>
      <span className="text-xs text-gray-500">
        {new Date(order.orderTime).toLocaleDateString()}
      </span>
      <div className="mb-2 text-gray-600">
        {order.orderStatus === 'delivered' ? '배달 완료' : '배달 중'}
      </div>
      <div className="mb-2 text-sm">
        {order.menus.map((item, index) => (
          <div key={index}>
            {item.menuName} x {item.menuCount}
          </div>
        ))}
      </div>
      <span className="font-semibold">합계 금액: {order.orderPrice.toLocaleString()}원</span>
      <Link
        href={`/order/${order.orderId}/add-review`}
        className="my-4 bg-[#0FA5FA] p-2 text-center text-white hover:underline"
      >
        리뷰쓰기
      </Link>
    </div>
  )
}
