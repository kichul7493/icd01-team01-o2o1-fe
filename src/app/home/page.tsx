'use client'
import React, { useState } from 'react'
import CategoryButton from '@/app/home/_components/CategoryButton'
import AddressContainer from '@/app/home/_components/AddressContainer'
import useStoreData from '@/mocks/handlers/store'
import { Store } from '@/types/store'
import useGetStoreList from '@/features/store/hooks/useGetStoreList'
import StoreCard from '@/components/shared/StoreCard'
import { CardHeight, NodePadding, TopBarHeight } from '@/features/store/constants'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
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

  if (storeLoading && categoryLoading) return <LoadingSpinner isFullScreen size="lg" />
  if (storeError || categoryError) return <div>에러 발생</div>

  return (
    <div className="flex flex-col p-4 pb-[4.5rem]">
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
    </div>
  )
}
