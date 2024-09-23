import { BASE_URL } from '@/constants/api'
import { useOrderStatusStore } from '@/store/orderStatus'
import { useEffect, useState } from 'react'
import { EventSourcePolyfill } from 'event-source-polyfill'

export const useStreamDeliveryLocation = (orderId: number) => {
  const [deliveryLocation, setDeliveryLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const orderStatus = useOrderStatusStore((state) => state.orderStatus)

  useEffect(() => {
    // if (orderStatus !== 'delivering') return

    const accessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')

    if (!accessToken || !refreshToken) {
      return
    }

    const eventSource = new EventSourcePolyfill(`${BASE_URL}/order/${orderId}/delivery/location`, {
      headers: {
        Authorization: accessToken,
        refreshAuth: refreshToken,
      },
    })

    eventSource.onmessage = (event) => {
      console.log('Received message:', event.data)

      const { latitude, longitude } = JSON.parse(event.data)

      setDeliveryLocation({ latitude, longitude })
    }

    eventSource.onerror = (error) => {
      console.error('EventSource failed:', error)
    }

    return () => {
      eventSource.close()
    }
  }, [orderId, orderStatus])

  return { deliveryLocation }
}
