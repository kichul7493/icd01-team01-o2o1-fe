'use client'

import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

const StoreInfo = () => {
  const params = useParams<{ id: string }>()
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <section>
      <header className="flex items-baseline justify-between">
        <div>
          <address className="text-base/[18px] font-normal not-italic">
            {data?.address} {data?.addressDetail}
          </address>
          <p className="pt-2 text-base/[18px]">{data?.contactNumber}</p>
        </div>
        <nav>
          <Link href={`/store/${params?.id}/detail`}>
            <div className="flex items-center gap-1">
              <span className="text-base/[18px]">매장 정보</span>
              <ChevronRight />
            </div>
          </Link>
        </nav>
      </header>
      <div className="flex items-center pt-2">
        <Star size={16} fill="#FFBD2E" color="#FFBD2E" aria-label="Star rating" />
        <p className="flex items-center pl-1 text-xs font-semibold">
          <span>{data?.reviewRate}</span>
          <span>({data?.reviewCount})</span>
        </p>
        <ChevronRight size={16} />
      </div>
    </section>
  )
}

export default StoreInfo
