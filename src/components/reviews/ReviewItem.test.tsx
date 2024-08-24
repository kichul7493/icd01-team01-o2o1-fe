import { render, screen } from '@testing-library/react'
import ReviewItem from './ReviewItem'

describe('ReviewItem', () => {
  it('리뷰 평점이 0일 때, 별점이 색칠되지 않아야 합니다', () => {
    const rating = 0

    render(<ReviewItem rating={rating} content="평점 2 리뷰" />)

    const stars = document.querySelectorAll('svg')

    for (let i = rating; i < 5; i++) {
      expect(stars[i]).toHaveClass('text-gray-400')
    }
  })

  it('리뷰 평점이 3일 때, 별점이 3개만 색칠되어야 합니다', () => {
    const rating = 3

    render(<ReviewItem rating={rating} content="평점 3 리뷰" />)

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

    render(<ReviewItem rating={rating} content="평점 4 리뷰" />)

    const stars = document.querySelectorAll('svg')

    for (let i = 0; i < rating; i++) {
      expect(stars[i]).toHaveClass('text-yellow-400')
    }
  })

  it('리뷰 내용이 주어진다면, 해당 내용이 출력되어야 합니다', () => {
    const content = '리뷰 내용'

    render(<ReviewItem rating={3} content={content} />)

    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it('리뷰 이미지가 주어진다면 이미지가 출력되어야 합니다', () => {
    //TODO: 리뷰 이미지가 추가되면 테스트 코드를 작성하세요.
  })
})
