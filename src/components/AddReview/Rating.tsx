import StarRatingIcon from '@/components/shared/StarRatingIcon'
import React from 'react'

interface RatingProps {
  value: number
  handleChange: (rating: number) => void
}

const Rating = ({ value, handleChange }: RatingProps) => {
  return (
    <div className="mb-5 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button key={i} type="button" onClick={() => handleChange(i + 1)}>
          <StarRatingIcon
            className="cursor-pointer"
            testId={`starIcon-${i}`}
            width={20}
            height={20}
            key={i}
            fill={value > i}
          />
        </button>
      ))}
    </div>
  )
}

export default Rating
