import { render, screen } from '@testing-library/react'
import ReviewsScreen from './ReviewsScreen'

describe('ReviewsScreen', () => {
  it('상단 뒤로가기 버튼이 있어야 합니다', () => {
    render(<ReviewsScreen />)

    const backButton = screen.getByRole('link')

    expect(backButton).toBeInTheDocument()
  })

  it('상단 가게 이름이 출력되어야 합니다', () => {
    // 추후 가게 이름을 가져오는 로직에 따라 수정이 필요합니다.
    const storeName = '후라이드 참 잘하는집 미아점'

    const { getByText } = render(<ReviewsScreen />)

    expect(getByText(storeName)).toBeInTheDocument()
  })
})
