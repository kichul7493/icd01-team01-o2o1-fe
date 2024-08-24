import React from 'react'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import ReviewItem from '@/components/reviews/ReviewItem'
import Link from 'next/link'

const reviews = [
  {
    rating: 2,
    content: '그냥 그래요.. 다시 시킬지 모르겠어요',
  },
  {
    rating: 3,
    content: '가격대비 괜찮아요',
  },
  {
    rating: 4,
    content: '맛있어요! 강추!',
  },
  {
    rating: 5,
    content: '일주일에 한번은 시켜요!',
  },
]

const ReviewsScreen = () => {
  return (
    <div className="pb-20">
      <div className="flex items-center gap-3 p-4">
        <Link href="/">
          <ArrowLeftIcon width={24} height={24} />
        </Link>
        <p className="font-semibold">후라이드 참 잘하는집 미아점</p>
      </div>
      {reviews.map((review, index) => (
        <ReviewItem key={index} rating={review.rating} content={review.content} />
      ))}
    </div>
  )
}

export default ReviewsScreen
