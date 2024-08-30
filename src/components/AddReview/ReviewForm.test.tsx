import { render, screen } from '@testing-library/react'
import ReviewForm from './ReviewForm'

describe('ReviewForm', () => {
  it('매장 이름, 리뷰 작성 텍스트 박스, 별점, 이미지 업로더, 등록하기 버튼이 출력된다.', () => {
    // URL.createObjectURL을 모킹합니다.
    global.URL.createObjectURL = jest.fn(() => 'http://via.placeholder.com/150')

    render(<ReviewForm />)

    expect(screen.getByText('삼청당 고대안암점')).toBeInTheDocument()
    expect(screen.getAllByTestId('starIcon')).toHaveLength(5)
    expect(screen.getByPlaceholderText('리뷰를 작성해주세요.')).toBeInTheDocument()
    expect(screen.getByLabelText('사진 추가')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: '등록하기' })).toBeInTheDocument()
  })
})
