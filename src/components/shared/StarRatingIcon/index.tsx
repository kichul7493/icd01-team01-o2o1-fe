import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

interface StarRatingIconProps {
  width?: number
  height?: number
  fill?: boolean
}

const StarRatingIcon = ({ width = 16, height = 16, fill }: StarRatingIconProps) => {
  return (
    <StarFilledIcon
      width={width}
      height={height}
      className={fill ? 'text-yellow-400' : 'text-gray-400'}
    />
  )
}

export default StarRatingIcon
