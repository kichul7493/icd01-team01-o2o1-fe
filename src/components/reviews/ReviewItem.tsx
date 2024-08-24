import React from 'react'
import { StarFilledIcon } from '@radix-ui/react-icons'

interface ReviewItemProps {
  rating: number
  content: string
}

const ReviewItem = ({ rating, content }: ReviewItemProps) => {
  return (
    <div className="m-4 border-b-2">
      <div className="mb-2 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <StarFilledIcon
              key={i}
              width={16}
              height={16}
              className={i < rating ? 'text-yellow-400' : 'text-gray-400'}
            />
          )
        })}
      </div>
      <div className="mb-2 h-60 bg-gray-400"></div>
      <p className="mb-5">{content}</p>
    </div>
  )
}

export default ReviewItem
