'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { useParams } from 'next/navigation'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const Thumbnail = () => {
  const params = useParams<{
    mid: string
  }>()
  const { data, isLoading } = useGetStoreDetailInfo()

  const images =
    data?.menus
      ?.filter((menu) => menu.menuId === Number(params.mid))
      .flatMap((menu) => menu.menuImages) || []

  if (isLoading) {
    return <figure className="relative h-[220px] w-full bg-gray-200"></figure>
  }

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

  // 이미지가 여러 개 있을 경우 슬라이더로 표시
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
