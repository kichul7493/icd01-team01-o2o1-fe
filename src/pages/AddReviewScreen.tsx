import React from 'react'
import { Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import ReviewForm from '@/components/AddReview/ReviewForm'

const AddReviewScreen = () => {
  return (
    <div>
      <div className="mb-16 flex items-center justify-between p-4">
        <Link href="/">
          <Cross1Icon />
        </Link>
        <p className="font-semibold">만족도 평가 및 리뷰</p>
        <div className="w-4"></div>
      </div>
      <ReviewForm />
    </div>
  )
}

export default AddReviewScreen
