'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ThumbnailProps {
  images: string[]
}

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Thumbnail = ({ images }: ThumbnailProps) => {
  if (images.length === 0) {
    return <figure className="relative h-[220px] w-full bg-gray-200"></figure>
  }

  if (images.length === 1) {
    return (
      <figure className="relative h-[220px] w-full bg-gray-200">
        <Image src={images[0]} alt="Thumbnail" fill priority />
      </figure>
    )
  }

  return (
    <div className="relative h-[220px] w-full overflow-hidden">
      <Slider {...settings}>
        {images.map((src, index) => (
          <figure key={index} className="relative h-[220px] w-full bg-gray-200">
            <Image src={src} alt={`Thumbnail ${index + 1}`} fill priority={index === 0} />
          </figure>
        ))}
      </Slider>
    </div>
  )
}

export default Thumbnail
