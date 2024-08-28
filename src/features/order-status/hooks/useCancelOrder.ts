import { useMutation } from '@tanstack/react-query'
import axiosInst from '@/util/axiosInst'

interface UseCancelOrderProps {
  orderId: string
  onSuccessCallback: () => void
}

export const useCancelOrder = ({ orderId, onSuccessCallback }: UseCancelOrderProps) => {
  const mutation = useMutation({
    mutationKey: ['cancelOrder', orderId],
    mutationFn: (orderId: string) => {
      return axiosInst.delete(`/order/${orderId}`)
    },
    onSuccess: onSuccessCallback,
  })

  const handleCancelOrder = () => {
    mutation.mutate(orderId)
  }

  return { handleCancelOrder, isPending: mutation.isPending }
}
