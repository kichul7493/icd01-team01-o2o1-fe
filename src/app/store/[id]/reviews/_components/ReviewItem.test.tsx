import { render, screen } from '@testing-library/react'
import ReviewItem from './ReviewItem'
import { Review } from '@/features/reviews/types'

describe('ReviewItem', () => {
  it('리뷰 평점이 0일 때, 별점이 색칠되지 않아야 합니다', () => {
    const rating = 0
    const review: Review = {
      rating,
      reviewImages: ['https://via.placeholder.com/500x240'],
      contents: '맛있어요!',
      reviewId: 1,
    }

    render(<ReviewItem review={review} />)

    const stars = document.querySelectorAll('svg')

    for (let i = rating; i < 5; i++) {
      expect(stars[i]).toHaveClass('text-gray-400')
    }
  })

  it('리뷰 평점이 3일 때, 별점이 3개만 색칠되어야 합니다', () => {
    const rating = 3

    const review: Review = {
      rating,
      reviewImages: ['https://via.placeholder.com/500x240'],
      contents: '맛있어요!',
      reviewId: 1,
    }

    render(<ReviewItem review={review} />)

    const stars = document.querySelectorAll('svg')

    for (let i = 0; i < rating; i++) {
      expect(stars[i]).toHaveClass('text-yellow-400')
    }

    for (let i = rating; i < 5; i++) {
      expect(stars[i]).toHaveClass('text-gray-400')
    }
  })

  it('리뷰 평점이 5일 때, 별점이 5개 전부 색칠되어야 합니다', () => {
    const rating = 5

    const review: Review = {
      rating,
      reviewImages: ['https://via.placeholder.com/500x240'],
      contents: '맛있어요!',
      reviewId: 1,
    }

    render(<ReviewItem review={review} />)

    const stars = document.querySelectorAll('svg')

    for (let i = 0; i < rating; i++) {
      expect(stars[i]).toHaveClass('text-yellow-400')
    }
  })

  it('리뷰 내용과 이미지가 주어진다면, 해당 내용이 출력되어야 합니다', () => {
    const content = '리뷰 내용'

    const review: Review = {
      rating: 3,
      reviewImages: ['https://via.placeholder.com/500x240'],
      contents: content,
      reviewId: 1,
    }

    render(<ReviewItem review={review} />)

    const images = screen.getAllByAltText('review picture 1')

    expect(images).toHaveLength(review.reviewImages.length)
    expect(screen.getByText(content)).toBeInTheDocument()
  })
})
