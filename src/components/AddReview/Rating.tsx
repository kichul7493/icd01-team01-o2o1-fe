import StarRatingIcon from '@/components/shared/StarRatingIcon'
import React from 'react'

const Rating = () => {
  const [rating, setRating] = React.useState<number>(0)

  const handleChangeRating = (rating: number) => {
    setRating(rating)
  }

  return (
    <div className="mb-5 flex gap-1">
      <input readOnly type="number" value={rating} name="rating" className="hidden" />

      {Array.from({ length: 5 }).map((_, i) => (
        <button key={i} type="button" onClick={() => handleChangeRating(i + 1)}>
          <StarRatingIcon
            className="cursor-pointer"
            testId={`starIcon-${i}`}
            width={20}
            height={20}
            key={i}
            fill={rating > i}
          />
        </button>
      ))}
    </div>
  )
}

export default Rating
