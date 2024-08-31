import { useMutation } from '@tanstack/react-query'
import axiosInst from '@/util/axiosInst'
import { useParams, useRouter } from 'next/navigation'

export const useCancelOrder = () => {
  const params = useParams<{ orderId: string }>()
  const router = useRouter()

  const { orderId } = params

  const mutation = useMutation({
    mutationKey: ['cancelOrder', orderId],
    mutationFn: (orderId: string) => {
      return axiosInst.delete(`/order/${orderId}`)
    },
    onSuccess: () => router.back(),
  })

  const handleCancelOrder = () => {
    mutation.mutate(orderId)
  }

  return { handleCancelOrder, isPending: mutation.isPending }
}
