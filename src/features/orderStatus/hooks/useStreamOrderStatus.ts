import { useEffect, useState } from 'react'
import { OrderStatus } from '../types'
import { useOrderStatusStore } from '@/store/orderStatus'
import { BASE_URL } from '@/constants/api'

interface UseStreamOrderStatusProps {
  orderId: number
  initStatus: OrderStatus
}

export const useStreamOrderStatus = ({ orderId, initStatus }: UseStreamOrderStatusProps) => {
  const { orderStatus, changeOrderStatus } = useOrderStatusStore((state) => state)

  useEffect(() => {
    changeOrderStatus(initStatus)
  }, [changeOrderStatus, initStatus])

  useEffect(() => {
    // TODO: 주문 상태 SSE URL이 정해지면 수정
    const source = new EventSource(`${BASE_URL}/order/${orderId}/stream`)

    source.addEventListener('orderStatusUpdate', (event) => {
      console.log(JSON.parse(event.data).orderStatus)

      const { orderStatus } = JSON.parse(event.data)

      changeOrderStatus(orderStatus)
    })

    return () => {
      source.close()
    }
  }, [changeOrderStatus, orderId])

  return { orderStatus }
}
