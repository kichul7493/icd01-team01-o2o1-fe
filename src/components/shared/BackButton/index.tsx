'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { ArrowLeft } from 'lucide-react'

const BackButton = () => {
  const router = useRouter()

  return (
    <Button
      className="p-0"
      onClick={() => {
        router.back()
      }}
      variant="ghost"
    >
      <ArrowLeft size={24} />
    </Button>
  )
}

export default BackButton
