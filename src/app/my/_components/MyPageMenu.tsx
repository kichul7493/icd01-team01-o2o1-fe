import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import React from 'react'

const MyPageMenu = () => {
  return (
    <div>
      <Link href="/my/address" className="text-xl">
        주소 관리
      </Link>
      <Separator className="my-6" />
      <Link href="/my/order" className="my-6 text-xl">
        주문 내역
      </Link>
      <Separator className="my-6" />
      <div className="my-6 text-xl">로그 아웃</div>
      <Separator className="my-6" />
      <div className="my-6 text-xl">탈퇴</div>
      <Separator className="my-6" />
    </div>
  )
}

export default MyPageMenu
