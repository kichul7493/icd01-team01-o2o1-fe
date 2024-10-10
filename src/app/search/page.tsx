'use client'
import { useEffect, useState } from 'react'
import { Store } from '@/types/store'
import useGetStoreList from '@/features/store/hooks/useGetStoreList'
import StoreCard from '@/components/shared/StoreCard'
import SearchInput from './_components/SearchInput'
import { CardHeight, NodePadding, TopBarHeight } from '@/features/store/constants'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const { pages, isLoading, scrollPos, isError } = useGetStoreList({
    keyword: searchTerm,
  })

  if (isLoading) return <LoadingSpinner isFullScreen size="lg" />
  if (isError) return <div>에러 발생</div>

  return (
    <div className="flex h-screen flex-col p-4 pb-[4.5rem]">
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div>
        {searchTerm &&
          pages &&
          pages.map((page, i: number) => {
            return page.data?.map((store: Store, index: number) => {
              const storeIndex = index + i * 10

              return scrollPos < CardHeight * (storeIndex + 1 + NodePadding) + TopBarHeight &&
                scrollPos + window.innerHeight > CardHeight * (storeIndex - 1 - NodePadding) ? (
                <StoreCard key={store.storeName} store={store} />
              ) : (
                <div className="h-[276px] w-full bg-gray-300"></div>
              )
            })
          })}
      </div>
    </div>
  )
}
