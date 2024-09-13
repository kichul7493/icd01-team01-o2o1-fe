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
      console.error('에러가 발생했습니다. 잠시 후 다시 시도해주세요.')
    },
  })
  return { mutate }
}

export default useOrderMenu
