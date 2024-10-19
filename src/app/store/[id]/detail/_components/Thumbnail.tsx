'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { Skeleton } from '@/components/ui/skeleton'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'

const Thumbnail = () => {
  const { data, isLoading, isError: isStoreError } = useGetStoreDetailInfo()
  const [isError, setIsError] = useState(false)

  return (
    <figure className="relative h-[220px] w-full bg-gray-200">
      {isLoading ? (
        <Skeleton className="h-full w-full" />
      ) : isError || isStoreError || !data?.thumbnails[0] ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-300 text-gray-500">
          이미지 로드 실패
        </div>
      ) : (
        <Image
          src={data.thumbnails[0]}
          alt="Thumbnail"
          fill
          onError={() => setIsError(true)} // 이미지 로드 실패 시 호출
        />
      )}
    </figure>
  )
}

export default Thumbnail
