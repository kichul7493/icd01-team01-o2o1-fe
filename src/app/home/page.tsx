'use client'
import React, { useState } from 'react'
import CategoryButton from '@/components/home/CategoryButton'
import StoreCard from '@/components/home/StoreCard'
import AddressContainer from '@/components/home/AddressContainer'
import useStoreData from '@/mocks/handlers/store'
import { Restaurant } from '@/types/store'

const address = '서울 강남구 강남대로 396'

const categories = [
  '1인분',
  '족발·보쌈',
  '돈까스·회·일식',
  '고기·구이',
  '찜·탕·찌개',
  '양식',
  '중식',
  '아시안',
  '치킨',
  '백반·죽·국수',
  '버거',
  '카페·디저트',
  '분식',
]

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const { useStoreQuery } = useStoreData()
  const { data: stores } = useStoreQuery()
  console.log(stores)
  const filteredRestaurants = selectedCategory
    ? stores.filter((restaurant: Restaurant) => restaurant.category === selectedCategory)
    : stores
  return (
    <div className="flex flex-col p-4 pb-[4.5rem]">
      <AddressContainer address={address} />
      <div className="scroll mb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
          />
        ))}
      </div>

      <div className="h-screen space-y-4 overflow-y-auto scrollbar-hide">
        {filteredRestaurants.map((restaurant: Restaurant) => (
          <StoreCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
