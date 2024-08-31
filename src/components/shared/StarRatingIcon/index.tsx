import { cn } from '@/lib/utils'
import { StarFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

interface StarRatingIconProps {
  width?: number
  height?: number
  fill?: boolean
  className?: string
  testId?: string
}

const StarRatingIcon = ({
  width = 16,
  height = 16,
  fill,
  className,
  testId,
}: StarRatingIconProps) => {
  return (
    <StarFilledIcon
      width={width}
      height={height}
      data-testid={testId}
      className={cn(className, {
        'text-yellow-400': fill,
        'text-gray-400': !fill,
      })}
    />
  )
}

export default StarRatingIcon
