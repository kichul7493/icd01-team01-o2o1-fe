import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getReviews } from '../api'

export const useStoreReviewInfiniteQuery = (storeId: string) => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['store', storeId, 'reviews'],
    queryFn: ({ pageParam }) => getReviews(storeId, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight && hasNextPage) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  return {
    storeName: data?.pages[0].response.storeName,
    pages: data?.pages,
    isFetchingNextPage,
    isLoading,
  }
}
