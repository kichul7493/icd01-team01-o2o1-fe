'use client'

import React from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import ReviewItem from '@/components/reviews/ReviewItem'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useStoreReviewInfiniteQuery } from '@/app/features/reviews/hooks'

const ReviewsScreen = () => {
  const params = useParams<{
    id: string
  }>()

  const router = useRouter()

  const { id } = params

  const { pages, storeName, isLoading } = useStoreReviewInfiniteQuery(id)

  return (
    <div className="pb-20">
      <div className="flex items-center gap-3 p-4">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault()
            router.back()
          }}
        >
          <ArrowLeftIcon width={24} height={24} />
        </Link>
        <p className="font-semibold">{storeName}</p>
      </div>
      {isLoading && (
        <div className="flex h-screen w-full items-center justify-center">
          <p>로딩중...</p>
        </div>
      )}
      {pages &&
        pages.map((page) => {
          return page.response.reviews.map((review) => (
            <ReviewItem key={review.reviewId} review={review} />
          ))
        })}
    </div>
  )
}

export default ReviewsScreen
