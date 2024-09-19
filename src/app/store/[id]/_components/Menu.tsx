'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'

interface MenuProps {
  id: number
  name: string
  price: number
  image: string
  isLoading?: boolean // 로딩 상태를 나타내는 prop 추가
}

const Menu: React.FC<MenuProps> = ({ id, name, price, image, isLoading = false }) => {
  const params = useParams<{ id: string }>()
  const [imageError, setImageError] = useState<boolean>(false)

  return (
    <Link href={`/store/${params.id}/menu/${id}`}>
      <section className="cursor-pointer" aria-labelledby="menu-section">
        <article className="flex justify-between border-b border-[#EEEEEE] py-3.5">
          <div className="flex-1">
            {isLoading ? (
              <>
                <Skeleton className="h-5 w-1/4" />
              </>
            ) : (
              <>
                <h3 className="text-base/[18px] font-semibold">{name}</h3>
                <p className="pt-2 text-base/[18px] font-normal">{price.toLocaleString()}원</p>
              </>
            )}
          </div>
          <figure className="relative h-[100px] w-[100px] bg-gray-200">
            {isLoading ? (
              <Skeleton className="h-full w-full" />
            ) : imageError ? (
              <div className="flex h-full w-full items-center justify-center bg-gray-400 text-white"></div>
            ) : (
              <Image
                src={image}
                alt={`menu-image-${name}`}
                fill
                sizes="(max-width: 768px) 100px, (max-width: 1200px) 50px, 33px"
                onError={() => setImageError(true)} // 이미지 로드 실패 시 호출
              />
            )}
          </figure>
        </article>
      </section>
    </Link>
  )
}

export default Menu
