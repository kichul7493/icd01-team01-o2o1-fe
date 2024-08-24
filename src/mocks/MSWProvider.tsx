'use client'

import React, { useEffect, useState } from 'react'

interface MSWProviderProps {
  children: React.ReactNode
}

const MSWProvider = ({ children }: MSWProviderProps) => {
  const [mswReady, setMswReady] = useState(false)
  useEffect(() => {
    const init = async () => {
      const initMsw = await import('./index').then((res) => res.initMsw)
      await initMsw()
      setMswReady(true)
    }

    if (!mswReady) {
      init()
    }
  }, [mswReady])

  if (!mswReady) {
    return null
  }

  return <>{children}</>
}

export default MSWProvider
