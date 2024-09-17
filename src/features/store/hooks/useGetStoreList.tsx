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
          // address: mainAddress!!,
          // api 에러 수정 후 사용자 주소로 변경 예정
          address: {
            latitude: 37.5662952,
            longitude: 126.9779451,
            address: '서울특별시 중구 명동길 74',
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
