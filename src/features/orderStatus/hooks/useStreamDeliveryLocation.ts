import { BASE_URL } from '@/constants/api'
import { useOrderStatusStore } from '@/store/orderStatus'
import { useEffect, useState } from 'react'

export const useStreamDeliveryLocation = (orderId: number) => {
  const [deliveryLocation, setDeliveryLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  const orderStatus = useOrderStatusStore((state) => state.orderStatus)

  useEffect(() => {
    if (orderStatus !== 'delivering') return

    const source = new EventSource(`${BASE_URL}/delivery/${orderId}/location`)

    source.addEventListener('orderStatusUpdate', (event) => {
      const { latitude, longitude } = JSON.parse(event.data)

      setDeliveryLocation({ latitude, longitude })
    })

    return () => {
      source.close()
    }
  }, [orderId, orderStatus])

  return { deliveryLocation }
}
