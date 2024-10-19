'use client'

import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { Skeleton } from '@/components/ui/skeleton'

const StoreDescribe = () => {
  const { data, isLoading, isError, refetch } = useGetStoreDetailInfo()

  if (isError) {
    return (
      <div>
        <div>매장 정보를 불러오는 중 에러가 발생했습니다.</div>
        <button onClick={() => refetch()}>다시 시도</button>
      </div>
    )
  }

  return isLoading ? (
    <div className="flex flex-col gap-2 text-base/[18px] font-normal">
      <Skeleton className="h-[18px] w-3/4" />
      <Skeleton className="h-[18px] w-1/2" />
      <Skeleton className="h-[18px] w-2/3" />
      <Skeleton className="h-[18px] w-1/3" />
    </div>
  ) : (
    <div className="flex flex-col gap-2 text-base/[18px] font-normal">
      <address className="not-italic">
        {data?.address} {data?.addressDetail}
      </address>
      <p>전화번호: {data?.contactNumber}</p>
      <p>
        영업 시간: <time>{data?.openTime}</time> ~ <time>{data?.closeTime}</time>
      </p>
      <p>{'배달 가능 지역'}</p>
    </div>
  )
}

export default StoreDescribe
