'use client'

import { ChevronRight, Star } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface StoreInfoProps {
  address: string
  contact: string
  star: number
  reviewCount: number
}

const StoreInfo = ({ address, contact, star, reviewCount }: StoreInfoProps) => {
  const { id } = useParams()

  return (
    <section>
      <header className="flex items-baseline justify-between">
        <div>
          <address className="text-base/[18px] font-normal not-italic">{address}</address>
          <p className="pt-2 text-base/[18px]">{contact}</p>
        </div>
        <nav>
          <Link href={`/store/${id}/detail`}>
            <div className="flex items-center gap-1">
              <span className="text-base/[18px]">매장 정보</span>
              <ChevronRight />
            </div>
          </Link>
        </nav>
      </header>
      <div className="flex items-center pt-2">
        <Star size={16} fill="#FFBD2E" color="#FFBD2E" aria-label="Star rating" />
        <p className="flex items-center pl-1 text-xs font-semibold">
          <span>{star}</span>
          <span>({reviewCount})</span>
        </p>
        <ChevronRight size={16} />
      </div>
    </section>
  )
}

export default StoreInfo
