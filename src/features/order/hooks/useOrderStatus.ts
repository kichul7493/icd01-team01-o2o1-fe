import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { getOrderStatus } from '../api'

export const useOrderStatus = () => {
  const params = useParams<{ orderId: string }>()

  const { data, isLoading } = useQuery({
    queryKey: ['order', params?.orderId],
    queryFn: async () => getOrderStatus(params?.orderId || ''),
  })

  return { data, isLoading }
}
