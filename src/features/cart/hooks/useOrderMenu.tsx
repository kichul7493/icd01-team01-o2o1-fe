import { useMutation } from '@tanstack/react-query'
import { order } from '@/features/cart/api/index'
import { useRouter } from 'next/navigation'

const useOrderMenu = () => {
  const router = useRouter()
  const { mutate } = useMutation({
    mutationKey: ['order'],
    mutationFn: order,
    onSuccess: async (data) => {
      router.push(`/order-status/${data.response.orderId}`)
    },
    onError: () => {
      alert('주문 기능은 미구현 상태입니다.')
    },
  })
  return { mutate }
}

export default useOrderMenu
