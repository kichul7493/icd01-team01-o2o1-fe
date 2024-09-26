'use client'
import { useEffect, useState } from 'react'
import { Store } from '@/types/store'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import useGetStoreList from '@/features/store/hooks/useGetStoreList'
import StoreCard from '@/components/shared/StoreCard'
import SearchInput from './_components/SearchInput'
import throttle from 'lodash.throttle'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const { pages, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, isError } =
    useGetStoreList({
      keyword: searchTerm,
    })

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 400 && hasNextPage) {
        fetchNextPage()
      }
    }, 300)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  if (isLoading) return <LoadingSpinner />
  if (isError) return <div>에러 발생</div>

  return (
    <div className="flex h-screen flex-col p-4 pb-[4.5rem]">
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div>
        {pages &&
          pages.map((page) => {
            return page.data?.map((store: Store) => (
              <StoreCard key={store.storeName} store={store} />
            ))
          })}
      </div>
    </div>
  )
}
