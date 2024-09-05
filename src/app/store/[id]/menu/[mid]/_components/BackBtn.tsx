'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const BackBtn = () => {
  const router = useRouter()

  return (
    <header className="absolute top-0 z-10 flex w-full items-center p-4">
      <button onClick={() => router.back()} aria-label="Go back" className="flex items-center">
        <ArrowLeft />
      </button>
    </header>
  )
}

export default BackBtn
