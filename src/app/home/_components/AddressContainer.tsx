'use client'
import * as React from 'react'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import useGetMemberAddress from '@/features/member/hooks/useGetMemberAddress'

export default function AddressContainer() {
  const { data } = useGetMemberAddress()

  if (!data) return null

  const mainAddress = data?.addresses.find((address) => address.addressStatus === 'main')

  return (
    <Link href={'/my/address'} className="mb-4 flex items-center justify-start">
      <MapPin size={20} />
      <p>
        {mainAddress?.address} {mainAddress?.addressDetail}
      </p>
    </Link>
  )
}
