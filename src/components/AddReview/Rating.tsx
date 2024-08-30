import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Rating = () => {
  const [rating, setRating] = React.useState<number>(0)

  const handleChangeRating = (rating: number) => {
    setRating(rating)
  }

  return (
    <div className="mb-5 flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <button key={i} onClick={() => handleChangeRating(i + 1)}>
          <StarFilledIcon
            data-testid={`starIcon`}
            width={20}
            height={20}
            key={i}
            className={`cursor-pointer ${rating > i ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        </button>
      ))}
    </div>
  )
}

export default Rating
