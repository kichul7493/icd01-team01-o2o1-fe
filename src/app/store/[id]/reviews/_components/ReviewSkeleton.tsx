import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const ReviewSkeleton = () => {
  return (
    <div className="px-4 pt-2">
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  )
}

export default ReviewSkeleton

const ReviewItem = () => {
  return (
    <div>
      <Skeleton className="my-3 h-4 w-24" />
      <Skeleton className="mb-2 h-[232px] w-full" />
      <Skeleton className="mb-5 h-4 w-40" />
      <Skeleton className="h-[2px] w-full" />
    </div>
  )
}
