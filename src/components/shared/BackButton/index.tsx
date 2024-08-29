'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import Icon from '../Icon'

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
      <Icon name="arrow-left" size={24} />
    </Button>
  )
}

export default BackButton
