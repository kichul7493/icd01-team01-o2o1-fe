'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Thumbnail = () => {
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <Slider {...settings}>
      {data?.thumbnails.map((src, index) => (
        <figure key={index} className="relative h-[220px] w-full bg-gray-200">
          <Image src={src} alt={`Thumbnail ${index + 1}`} fill priority={index === 0} />
        </figure>
      ))}
    </Slider>
  )
}

export default Thumbnail
