import { useEffect } from 'react'
import { useOrderStatusStore } from '@/store/orderStatus'
import { BASE_URL } from '@/constants/api'
import { EventSourcePolyfill } from 'event-source-polyfill'
import { OrderStatus } from '../types'

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
    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!accessToken || !refreshToken) {
      return
    }

    // TODO: 주문 상태 SSE URL이 정해지면 수정
    const eventSource = new EventSourcePolyfill(`${BASE_URL}/order/status/1`, {
      headers: {
        Authorization: accessToken,
        refreshAuth: refreshToken,
      },
    })

    eventSource.onmessage = (event) => {
      console.log('Received message:', event.data)

      const { orderStatus } = JSON.parse(event.data)

      changeOrderStatus(orderStatus)
    }

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
    }

    return () => {
      eventSource.close()
    }
  }, [changeOrderStatus, orderId])

  return { orderStatus }
}
