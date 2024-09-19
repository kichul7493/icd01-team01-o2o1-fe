'use client'

import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { Skeleton } from '@/components/ui/skeleton'

const StoreInfo = () => {
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useGetStoreDetailInfo()

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
