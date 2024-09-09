import { signIn, useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { SessionType } from './auth'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { OAuthLogin } from './api'

/**
 * 타입을 명시하기 위해,
 * useSession을 한번 래핑함
 */
export const useSessionHook = () => {
  const { data: session, status } = useSession()
  const userSession = { ...session } as SessionType

  return {
    session: userSession,
    status,
  }
}

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { session, status } = useSessionHook()
  const { mutate: signUp } = useSignUp()

  useEffect(() => {
    console.log(session)
    if (session?.accessToken) {
      signUp({
        accessToken: session.accessToken,
        subId: session.subId as string,
        name: session.name as string,
      })
    }
  }, [session.accessToken])

  const signInKakao = async () => {
    try {
      setIsLoading(true)
      await signIn('kakao', { redirect: false })
    } catch (error) {
      console.error('Error during login process:', error)
    } finally {
      setIsLoading(false)
    }
  }
  return {
    isSigning: status === 'authenticated' || status === 'loading',
    signInKakao,
    isLoading,
  }
}

export const useSignUp = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: OAuthLogin,
    onSuccess: async (data) => {
      const { isSignup } = data
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
