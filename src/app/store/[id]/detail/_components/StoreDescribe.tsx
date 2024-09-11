'use client'

import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

const StoreDescribe = () => {
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <div className="flex flex-col gap-2 text-base/[18px] font-normal">
      <address className="not-italic">
        {data?.address} {data?.addressDetail}
      </address>
      <p>전화번호: {data?.contactNumber}</p>
      <p>
        영업 시간: <time>{data?.openTime}</time> ~ <time>{data?.closeTime}</time>
      </p>
      {/* <p>{location ? '배달 가능 지역' : '배달 불가능 지역'}</p> */}
      <p>{'배달 가능 지역'}</p>
    </div>
  )
}

export default StoreDescribe
