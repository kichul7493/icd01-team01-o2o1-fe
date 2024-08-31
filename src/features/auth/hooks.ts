// src/features/invitation/model/useInvitation.ts

import { signIn, useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { SessionType } from './auth'
import { useRouter } from 'next/navigation'
import { useMutation } from '@tanstack/react-query'
import { kakaoLogin } from './api'

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

/**
 * 2가지 경우로 로그인할 수 있음
 *
 * 초대코드없이 로그인
 * 초대코드로 로그인
 */
export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { session, status } = useSessionHook()

  const signInKakao = async () => {
    try {
      setIsLoading(false)
      await signIn('kakao', { redirect: false })
      setIsLoading(true)
    } catch (error) {
      // 에러 처리
      console.error('Error during login process:', error)
      setIsLoading(true)
    }
  }
  console.log(session, status)
  return {
    isSigning: status === 'authenticated' || status === 'loading',
    signInKakao,
    isLoading,
  }
}

export const useSignUp = () => {
  const router = useRouter()

  return useMutation({
    mutationFn: kakaoLogin,
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
