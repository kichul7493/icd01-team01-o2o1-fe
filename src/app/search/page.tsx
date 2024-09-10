'use client'
import StoreCard from '@/components/home/StoreCard'
import { useState } from 'react'
import SearchInput from '@/components/search/SearchInput'
import useStoreData from '@/mocks/handlers/store'
import { Restaurant } from '@/types/store'
import LoadingSpinner from '@/components/common/LoadingSpinner'

export default function Search() {
  const { useStoreQuery } = useStoreData()
  const { data: stores, error: storeError, isLoading: storeLoading } = useStoreQuery()
  const [searchTerm, setSearchTerm] = useState('')
  const filteredRestaurants = stores.filter((restaurant: Restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )
  if (storeLoading) return <LoadingSpinner />
  if (storeError instanceof Error) return <div>에러 발생</div>

  return (
    <div className="flex h-screen flex-col p-4 pb-[4.5rem]">
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex-1 space-y-4 overflow-y-auto scrollbar-hide">
        {filteredRestaurants.map((restaurant: Restaurant) => (
          <StoreCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
