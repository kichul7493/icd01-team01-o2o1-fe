import { useMutation } from '@tanstack/react-query'
import axiosInst from '@/util/axiosInst'
import { useParams, useRouter } from 'next/navigation'

export const useCancelOrder = () => {
  const params = useParams<{ orderId: string }>()
  const router = useRouter()

  const mutation = useMutation({
    mutationKey: ['cancelOrder', params?.orderId],
    mutationFn: (orderId: string) => {
      return axiosInst.delete(`/order/${orderId}`)
    },
    onSuccess: () => router.back(),
    onError: () => {
      alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
    },
  })

  const handleCancelOrder = () => {
    mutation.mutate(params?.orderId || '')
  }

  return { handleCancelOrder, isPending: mutation.isPending }
}
