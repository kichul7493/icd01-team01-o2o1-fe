import React from 'react'
import { Review } from '@/app/features/reviews/types'
import Image from 'next/image'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import StarRatingIcon from '../shared/StarRatingIcon'

interface ReviewItemProps {
  review: Review
}

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ReviewItem = ({ review }: ReviewItemProps) => {
  return (
    <div className="m-4 border-b-2">
      <div className="mb-2 flex gap-1">
        {Array.from({ length: 5 }, (_, i) => {
          return <StarRatingIcon key={i} fill={i < review.rating} />
        })}
      </div>
      <div>
        <Slider {...settings}>
          {review.reviewImages.map((image, index) => (
            <div key={image + index}>
              <Image
                className="h-[232px] w-full object-cover"
                alt={`review picture ${index + 1}`}
                width={500}
                height={240}
                src={image}
              />
            </div>
          ))}
        </Slider>
      </div>

      <p className="mb-5">{review.contents}</p>
    </div>
  )
}

export default ReviewItem
