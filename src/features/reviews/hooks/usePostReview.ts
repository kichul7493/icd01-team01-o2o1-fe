import { useMutation } from '@tanstack/react-query'
import { ReviewRequest } from '../types'
import { postReview } from '../api'
import { useParams, useRouter } from 'next/navigation'

const usePostReview = () => {
  const params = useParams<{
    id: string
  }>()

  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationKey: ['postReview', params?.id],
    mutationFn: (review: ReviewRequest) => postReview(params?.id || '', review),
    onSuccess: () => {
      router.back()
    },
  })

  return {
    postReview: mutate,
    isPending,
  }
}

export default usePostReview
