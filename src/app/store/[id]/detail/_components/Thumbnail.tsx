'use client'

import Image from 'next/image'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

interface ThumbnailProps {
  image: string
}

const Thumbnail = ({ image }: ThumbnailProps) => {
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <figure className="relative h-[220px] w-full bg-gray-200">
      {data?.thumbnails[0] ? <Image src={data?.thumbnails[0]} alt={`Thumbnail`} fill /> : <></>}
    </figure>
  )
}

export default Thumbnail
