'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

const BackBtn = () => {
  const router = useRouter()
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <header className="absolute top-0 z-10 flex w-full items-center p-4">
      <button onClick={() => router.back()} aria-label="Go back" className="flex items-center">
        <ArrowLeft />
      </button>
      <h1 className="pl-3 text-lg font-semibold">{data?.storeName}</h1>
    </header>
  )
}

export default BackBtn
