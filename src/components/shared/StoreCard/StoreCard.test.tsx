import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import StoreCard from '.'
import { Store } from '@/types/store'

const mockRestaurant: Store = {
  storeId: 1,
  storeName: '테스트 식당',
  thumbnails: ['https://via.placeholder.com/300'],
  deliveryPrice: 3000,
  category: '카테고리',
  reviewRate: 4.5,
  reviewCount: 100,
}

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, ...props }: any) => {
    const { objectFit, layout, ...rest } = props
    return <img src={src} alt={alt} {...rest} />
  },
}))

jest.mock('@images/home/star.svg', () => '../../../public/images/home/star.svg')

describe('StoreCard', () => {
  it('컴포넌트가 올바르게 렌더링되는지 확인합니다', () => {
    render(<StoreCard store={mockRestaurant} />)

    expect(screen.getByText(mockRestaurant.storeName)).toBeInTheDocument()

    const starImage = screen.getByAltText(mockRestaurant.storeName)
    expect(starImage).toBeInTheDocument()
    expect(starImage).toHaveAttribute('src', mockRestaurant.thumbnails[0])

    expect(
      screen.getByText(`${mockRestaurant.reviewRate}(${mockRestaurant.reviewCount})`),
    ).toBeInTheDocument()
  })

  it('레스토랑 이미지가 올바르게 렌더링되는지 확인합니다', () => {
    render(<StoreCard store={mockRestaurant} />)

    const restaurantImage = screen.getByAltText(mockRestaurant.storeName)
    expect(restaurantImage).toBeInTheDocument()
    expect(restaurantImage).toHaveAttribute('src', mockRestaurant.thumbnails[0])
  })
})
