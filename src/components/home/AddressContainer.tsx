'use client'
import * as React from 'react'
import { MapPin } from 'lucide-react'

interface AddressProps {
  address: string
}

export default function AddressContainer({ address }: AddressProps) {
  return (
    <div className="mb-4 flex items-center justify-start">
      <MapPin size={20} />
      <p>{address}</p>
    </div>
  )
}
