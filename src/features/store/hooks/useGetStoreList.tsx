import useGetMemberAddress from '@/features/member/hooks/useGetMemberAddress'
import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { getStoreList } from '../api'
import useInfinityScroll from './useInfinityScroll'

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
          address: {
            latitude: mainAddress!!.latitude,
            longitude: mainAddress!!.longitude,
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

  const { scrollPos } = useInfinityScroll({
    fetchNextPage,
    hasNextPage,
  })

  return {
    pages: data?.pages,
    isFetchingNextPage,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isError,
    scrollPos,
  }
}

export default useGetStoreList
