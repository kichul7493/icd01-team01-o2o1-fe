'use client'
import * as React from 'react'
import { MapPin } from 'lucide-react'
import Link from 'next/link'

interface AddressProps {
  address: string
}

export default function AddressContainer({ address }: Readonly<AddressProps>) {
  return (
    <Link href={'/my/address/search'} className="mb-4 flex items-center justify-start">
      <MapPin size={20} />
      <p>{address}</p>
    </Link>
  )
}
