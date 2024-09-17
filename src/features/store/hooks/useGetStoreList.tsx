import useGetMemberAddress from '@/features/member/hooks/useGetMemberAddress'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getStoreList } from '../api'

interface useGetStoreList {
  category?: string
  keyword?: string
}

const useGetStoreList = ({ category, keyword }: useGetStoreList) => {
  const { data: addressData } = useGetMemberAddress()

  const mainAddress = addressData?.addresses.find((address) => address.addressStatus === 'main')

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isError } =
    useInfiniteQuery({
      queryKey: ['storeList', category, keyword],
      queryFn: ({ pageParam }) =>
        getStoreList({
          // 주소 저장 시 위경도가 반대로 저장되어 있어 수정
          //
          address: {
            latitude: mainAddress!!.longitude,
            longitude: mainAddress!!.latitude,
            address: mainAddress!!.address,
            addressDetail: '지하 1층',
            zipCode: '04536',
          },
          page: pageParam,
          category,
          keyword,
        }),
      enabled: !!mainAddress,
      initialPageParam: 1,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: 0,
    })

  return {
    pages: data?.pages,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
  }
}

export default useGetStoreList
