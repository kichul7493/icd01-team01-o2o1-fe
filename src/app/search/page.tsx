'use client'
import NullImage from '@images/home/null_image.svg'
import StoreCard from '@/components/home/StoreCard'
import { useState } from 'react'
import SearchInput from '@/components/search/SearchInput'

const restaurants = [
  { id: 1, name: '우리집 밥상', imageSrc: NullImage, rating: 4.7, reviews: 159, category: '한식' },
  {
    id: 2,
    name: '족발나라',
    imageSrc: NullImage,
    rating: 4.2,
    reviews: 200,
    category: '족발·보쌈',
  },
  {
    id: 3,
    name: '스시 타로',
    imageSrc: NullImage,
    rating: 4.8,
    reviews: 89,
    category: '돈까스·회·일식',
  },
  { id: 4, name: '치킨마루', imageSrc: NullImage, rating: 4.5, reviews: 99, category: '치킨' },
  {
    id: 5,
    name: '베이커리 카페',
    imageSrc: NullImage,
    rating: 4.1,
    reviews: 140,
    category: '카페·디저트',
  },
  {
    id: 6,
    name: '아시안 가든',
    imageSrc: NullImage,
    rating: 4.3,
    reviews: 152,
    category: '아시안',
  },
  { id: 7, name: '양식당', imageSrc: NullImage, rating: 4.7, reviews: 102, category: '양식' },
]

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="flex h-screen flex-col p-4 pb-[4.5rem]">
      <SearchInput searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <div className="flex-1 space-y-4 overflow-y-auto scrollbar-hide">
        {filteredRestaurants.map((restaurant) => (
          <StoreCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}
