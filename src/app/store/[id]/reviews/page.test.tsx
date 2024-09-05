import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useRouter } from 'next/navigation'
import { useStoreReviewInfiniteQuery } from '@/features/reviews/hooks'
import StoreReviewPage from './page'

jest.mock('../../../../features/reviews/hooks', () => ({
  useStoreReviewInfiniteQuery: jest.fn(),
}))

jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '1' }),
  useRouter: jest.fn().mockReturnValue({ back: jest.fn() }),
}))

describe('ReviewsScreen', () => {
  const storeName = '후라이드 참 잘하는집 미아점'

  ;(useStoreReviewInfiniteQuery as jest.Mock).mockReturnValue({
    storeName,
    pages: [
      {
        response: {
          reviews: [
            {
              reviewId: '1',
              rating: 5,
              reviewImages: ['https://via.placeholder.com/500x240'],
              contents: '맛있어요!',
            },
            {
              reviewId: '2',
              rating: 4,
              reviewImages: ['https://via.placeholder.com/500x240'],
              contents: '맛있어요!',
            },
            {
              reviewId: '3',
              rating: 3,
              reviewImages: ['https://via.placeholder.com/500x240'],
              contents: '맛있어요!',
            },
          ],
        },
      },
    ],
    isLoading: false,
  })

  it('상단 뒤로가기 버튼을 클릭하면 router.back 함수가 호출된다.', async () => {
    render(<StoreReviewPage />)

    const backButton = screen.getByRole('link')

    await userEvent.click(backButton)

    expect(backButton).toBeInTheDocument()
    expect(useRouter().back).toHaveBeenCalled()
  })

  it('상단 가게 이름이 출력되어야 합니다', () => {
    const { getByText } = render(<StoreReviewPage />)

    expect(getByText(storeName)).toBeInTheDocument()
  })
})
