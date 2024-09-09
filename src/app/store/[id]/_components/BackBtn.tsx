'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface BackBtnProps {
  storeTitle: string
}

const BackBtn: React.FC<BackBtnProps> = ({ storeTitle }) => {
  const router = useRouter()

  return (
    <header className="absolute top-0 z-10 flex w-full items-center p-4">
      <button onClick={() => router.back()} aria-label="Go back" className="flex items-center">
        <ArrowLeft />
      </button>
      <h1 className="pl-3 text-lg font-semibold">{storeTitle}</h1>
    </header>
  )
}

export default BackBtn
