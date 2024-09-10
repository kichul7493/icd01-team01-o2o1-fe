'use client'
import Image from 'next/image'
// Components
import { Button } from '@/components/ui/button'

import { useSignIn } from '@/features/auth/hooks/useSignIn'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

export default function LoginPage() {
  const { signInKakao, isLoading } = useSignIn()
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8">
      <div>
        <Image src="/logo-icon-96.png" alt="logo" width={100} height={100} />
        <div className="text-2xl">배달이써</div>
      </div>
      <Button onClick={signInKakao} className="w-80 bg-yellow-300 text-black" disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : '카카오로 시작하기'}
      </Button>
    </div>
  )
}
