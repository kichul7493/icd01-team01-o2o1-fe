import { StaticImageData } from 'next/image'

export type Restaurant = {
  id: number
  name: string
  imageSrc: StaticImageData
  rating: number
  reviews: number
  category: string
}
