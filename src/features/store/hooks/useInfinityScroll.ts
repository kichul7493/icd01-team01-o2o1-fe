import { useEffect, useRef, useState } from 'react'
import { CardCount, ScrollPreloadOffset } from '../constants'
import throttle from 'lodash.throttle'

interface UseInfinityScroll {
  fetchNextPage: () => void
  hasNextPage: boolean
}

const useInfinityScroll = ({ fetchNextPage, hasNextPage }: UseInfinityScroll) => {
  const [scrollPos, setScrollPos] = useState(0)

  const startCardIndexRef = useRef<number>(0)
  const endCardIndexRef = useRef<number>(CardCount)

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (
        window.scrollY + window.innerHeight >= document.body.scrollHeight - ScrollPreloadOffset &&
        hasNextPage
      ) {
        fetchNextPage()
      }

      setScrollPos(window.scrollY)
    }, 300)

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [fetchNextPage, hasNextPage])

  return {
    scrollPos,
  }
}

export default useInfinityScroll
