import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { oAuthLogin } from '../api'

export const useSignUp = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: oAuthLogin,
    onSuccess: async (data) => {
      const { isSignup } = data.response
      if (isSignup) {
        router.push('/home')
      } else {
        router.push('/signup')
      }
    },
    onError: (error) => {
      console.log(error)
    },
  })
}
