'use client'

import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { Skeleton } from '@/components/ui/skeleton'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

const StoreInfo = () => {
  const params = useParams<{ id: string }>()
  const { data, isLoading, isError, refetch } = useGetStoreDetailInfo()

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p>매장 정보를 불러오는 중 에러가 발생했습니다.</p>
        <button onClick={() => refetch()}>다시 시도</button>
      </div>
    )
  }

  if (isLoading) {
    return <LoadingSpinner isFullScreen />
  }

  return (
    <section>
      <header className="flex items-baseline justify-between">
        {isLoading ? (
          <div>
            <Skeleton className="h-[18px] w-3/4" /> {/* 주소 스켈레톤 */}
            <Skeleton className="h-[18px] w-1/2 pt-2" /> {/* 전화번호 스켈레톤 */}
          </div>
        ) : (
          <div>
            <address className="text-base/[18px] font-normal not-italic">
              {data?.address} {data?.addressDetail}
            </address>
            <p className="pt-2 text-base/[18px]">{data?.contactNumber}</p>
          </div>
        )}
        <nav className="cursor-pointer">
          {isLoading ? (
            <Skeleton className="h-[18px] w-20" />
          ) : (
            <Link href={`/store/${params?.id}/detail`}>
              <div className="flex items-center gap-1">
                <span className="text-base/[18px]">매장 정보</span>
                <ChevronRight />
              </div>
            </Link>
          )}
        </nav>
      </header>
      <div className="pt-2">
        {isLoading ? (
          <Skeleton className="h-[16px] w-32" />
        ) : (
          <Link href={`/store/${params?.id}/reviews`}>
            <div className="flex cursor-pointer items-center">
              <Star size={16} fill="#FFBD2E" color="#FFBD2E" aria-label="Star rating" />
              <p className="flex items-center pl-1 text-xs font-semibold">
                <span>{data?.reviewRate}</span>
                <span>({data?.reviewCount?.toLocaleString()})</span>
              </p>
              <ChevronRight size={16} />
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}

export default StoreInfo
