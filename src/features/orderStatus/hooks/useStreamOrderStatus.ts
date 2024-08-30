import { useEffect, useState } from 'react'
import { OrderStatus } from '../types'

interface UseStreamOrderStatusProps {
  orderId: number
  initStatus: OrderStatus
}

export const useStreamOrderStatus = ({ orderId, initStatus }: UseStreamOrderStatusProps) => {
  const [orderStatus, setOrderStatus] = useState<OrderStatus>(initStatus)

  useEffect(() => {
    // TODO: 주문 상태 SSE 경로가 정해지면 수정
    const source = new EventSource('http://example.com/stream')

    source.addEventListener('orderStatusUpdate', (event) => {
      console.log(JSON.parse(event.data).orderStatus)

      const { orderStatus } = JSON.parse(event.data)

      setOrderStatus(orderStatus)
    })

    return () => {
      source.close()
    }
  }, [])

  return { orderStatus }
}
