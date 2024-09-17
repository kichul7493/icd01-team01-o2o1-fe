'use client'
import React, { useState } from 'react'
import CategoryButton from '@/components/home/CategoryButton'
import StoreCard from '@/components/home/StoreCard'
import AddressContainer from '@/components/home/AddressContainer'
import useStoreData from '@/mocks/handlers/store'
import { Restaurant } from '@/types/store'
import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { useStoreQuery, useCategoryQuery } = useStoreData()
  const { data: stores, error: storeError, isLoading: storeLoading } = useStoreQuery()
  const { data: categories, error: categoryError, isLoading: categoryLoading } = useCategoryQuery()

  if (storeLoading && categoryLoading) return <LoadingSpinner />
  if (storeError instanceof Error || categoryError instanceof Error) return <div>에러 발생</div>

  const filteredRestaurants = selectedCategory
    ? stores.filter((restaurant: Restaurant) => restaurant.category === selectedCategory)
    : stores

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

      <div className="custom-scrollbar h-screen space-y-4 overflow-y-auto">
        {filteredRestaurants?.map((restaurant: Restaurant) => (
          <StoreCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
