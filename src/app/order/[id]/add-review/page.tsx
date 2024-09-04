import ReviewForm from '@/app/order/[id]/add-review/_components/ReviewForm'
import { Cross1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'

export default function AddReviewPage() {
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
