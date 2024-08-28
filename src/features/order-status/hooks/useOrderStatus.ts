import { useQuery } from '@tanstack/react-query'
import { getOrderStatus } from '../api'

export const useOrderStatus = (orderId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ['order', orderId],
    queryFn: async () => getOrderStatus(orderId),
  })

  return { data, isLoading }
}
