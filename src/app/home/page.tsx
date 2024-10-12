'use client'
import React, { useEffect, useRef, useState } from 'react'
import CategoryButton from '@/app/home/_components/CategoryButton'
import AddressContainer from '@/app/home/_components/AddressContainer'
import useStoreData from '@/mocks/handlers/store'
import { Store } from '@/types/store'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import useGetStoreList from '@/features/store/hooks/useGetStoreList'
import StoreCard from '@/components/shared/StoreCard'
import throttle from 'lodash.throttle'
import PullToRefresh from '@/components/shared/PullToRefresh'
import { useQueryClient } from '@tanstack/react-query'
import { CardHeight, NodePadding, TopBarHeight } from '@/features/store/constants'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { useCategoryQuery } = useStoreData()
  const { data: categories, error: categoryError, isLoading: categoryLoading } = useCategoryQuery()
  const {
    pages,
    isLoading: storeLoading,
    isError: storeError,
    scrollPos,
  } = useGetStoreList({
    category: selectedCategory || '',
  })
  const queryClient = useQueryClient()

  const handleRefresh = throttle(() => {
    queryClient.invalidateQueries({
      predicate: (query) => query.queryKey[0] === 'storeList',
    })
  }, 1000)

  if (storeLoading && categoryLoading) return <LoadingSpinner />
  if (storeError || categoryError) return <div>에러 발생</div>

  return (
    <PullToRefresh elementRef={containerRef} handleRefresh={handleRefresh}>
      <div ref={containerRef} className="flex flex-col p-4 pb-[4.5rem]">
        <AddressContainer />
        <div className="custom-scrollbar mb-4 overflow-x-auto whitespace-nowrap">
          {categories?.map((category: string) => (
            <CategoryButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
            />
          ))}
        </div>

      <div>
        {pages &&
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
    </PullToRefresh>
  )
}
