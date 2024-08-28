import { BASE_URL } from '@/constants/api'
import { useEffect, useState } from 'react'
export const useStreamDeliveryLocation = (orderId: number) => {
  const [deliveryLocation, setDeliveryLocation] = useState<{
    latitude: number
    longitude: number
  } | null>(null)

  useEffect(() => {
    const source = new EventSource(`${BASE_URL}/delivery/${orderId}/location`)

    source.addEventListener('orderStatusUpdate', (event) => {
      const { latitude, longitude } = JSON.parse(event.data)

      setDeliveryLocation({ latitude, longitude })
    })

    return () => {
      source.close()
    }
  }, [orderId])

  return { deliveryLocation }
}
