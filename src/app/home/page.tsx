'use client'
import React, { useEffect, useState } from 'react'
import CategoryButton from '@/app/home/_components/CategoryButton'
import AddressContainer from '@/app/home/_components/AddressContainer'
import useStoreData from '@/mocks/handlers/store'
import { Store } from '@/types/store'
import LoadingSpinner from '@/components/common/LoadingSpinner'
import useGetStoreList from '@/features/store/hooks/useGetStoreList'
import StoreCard from '@/components/shared/StoreCard'

const CardHeight = 276
const TopBarHeight = 117
const ScrollPreloadOffset = 300
const NodePadding = 2
const CardCount = 10

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { useCategoryQuery } = useStoreData()
  const { data: categories, error: categoryError, isLoading: categoryLoading } = useCategoryQuery()
  const {
    pages,
    isLoading: storeLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError: storeError,
  } = useGetStoreList({
    category: selectedCategory || '',
  })
  const [scrollPos, setScrollPos] = useState(0)

  const startCardIndexRef = React.useRef<number>(0)
  const endCardIndexRef = React.useRef<number>(CardCount)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY + window.innerHeight >= document.body.scrollHeight - ScrollPreloadOffset &&
        hasNextPage
      ) {
        fetchNextPage()
      }

      setScrollPos(window.scrollY)

      const startCardIndex = Number(((window.scrollY - TopBarHeight) / CardHeight).toFixed(0))

      if (startCardIndex < 0) {
        startCardIndexRef.current = 0
        endCardIndexRef.current = CardCount
      } else {
        startCardIndexRef.current = startCardIndex
        endCardIndexRef.current = startCardIndex + CardCount
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  if (storeLoading && categoryLoading) return <LoadingSpinner />
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
