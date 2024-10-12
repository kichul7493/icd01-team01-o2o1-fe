'use client'
import Image from 'next/image'
import * as React from 'react'
import Star from '@images/home/star.svg'
import Link from 'next/link'
import { Store } from '@/features/store/types'

interface StoreCardProps {
  store: Store
}

export default function StoreCard({ store }: Readonly<StoreCardProps>) {
  return (
    <Link
      className="w-full overflow-hidden rounded-lg bg-white text-start shadow"
      href={`/store/${store.storeId}`}
    >
      {' '}
      <div className="relative h-48 w-full">
        <Image src={store.thumbnails[0]} alt={store.storeName} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col p-4">
        <h2 className="text-lg font-semibold">{store.storeName}</h2>
        <div className="flex">
          <Image src={Star} alt={'별점'} width={16} height={16} />
          <span>
            {store.reviewRate}({store.reviewCount})
          </span>
        </div>
      </div>
    </Link>
  )
}
