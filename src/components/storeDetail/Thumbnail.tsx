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

const Thumbnail: React.FC<ThumbnailProps> = ({ images }) => {
  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <figure key={index} className="relative h-[220px] w-full bg-gray-200">
          <Image src={src} alt={`Slide ${index + 1}`} fill objectFit="cover" />
        </figure>
      ))}
    </Slider>
  )
}

export default Thumbnail
