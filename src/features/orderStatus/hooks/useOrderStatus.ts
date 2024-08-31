import { useQuery } from '@tanstack/react-query'
import { getOrderStatus } from '../api'
import { useParams } from 'next/navigation'

export const useOrderStatus = () => {
  const params = useParams<{ orderId: string }>()

  const { orderId } = params

  const { data, isLoading } = useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => getOrderStatus(orderId),
  })

  return { data, isLoading }
}
