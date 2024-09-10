import { render, screen } from '@testing-library/react'
import ReviewForm from './ReviewForm'
import userEvent from '@testing-library/user-event'
import usePostReview from '@/features/reviews/hooks/usePostReview'

jest.mock('../../../../../features/reviews/hooks/usePostReview.ts')

describe('ReviewForm', () => {
  const mockPostReview = jest.fn()

  it('매장 이름, 리뷰 작성 텍스트 박스, 별점, 이미지 업로더, 등록하기 버튼이 출력된다.', () => {
    // URL.createObjectURL을 모킹합니다.
    global.URL.createObjectURL = jest.fn(() => 'http://via.placeholder.com/150')
    ;(usePostReview as jest.Mock).mockReturnValue({
      postReview: mockPostReview,
      isPending: false,
    })

    render(<ReviewForm />)

    expect(screen.getByText('삼청당 고대안암점')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('리뷰를 작성해주세요.')).toBeInTheDocument()
    expect(screen.getByLabelText('사진 추가')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '등록하기' })).toBeInTheDocument()
    expect(screen.getByTestId('starIcon-0')).toBeInTheDocument()
  })

  it('등록하기 버튼을 클릭하면 postReview 함수가 호출된다.', async () => {
    ;(usePostReview as jest.Mock).mockReturnValue({
      postReview: mockPostReview,
      isPending: false,
    })

    render(<ReviewForm />)

    const button = screen.getByRole('button', { name: '등록하기' })
    await userEvent.click(button)

    expect(mockPostReview).toHaveBeenCalled()
  })
})
