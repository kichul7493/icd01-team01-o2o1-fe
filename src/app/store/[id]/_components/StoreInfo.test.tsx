import { render, screen, fireEvent } from '@testing-library/react'
import StoreInfo from './StoreInfo'
import { useParams } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}))

const mockProps = {
  address: '서울시 강남구 테헤란로 123',
  contact: '010-1234-5678',
  star: 4.5,
  reviewCount: 120,
}

describe('StoreInfo 컴포넌트', () => {
  // beforeEach(() => {
  //   ;(useParams as jest.Mock).mockReturnValue({ id: '1' })
  // })

  // it('주소, 연락처, 별점, 리뷰 개수를 렌더링한다', () => {
  //   render(<StoreInfo />)

  //   expect(screen.getByText(mockProps.address)).toBeInTheDocument()
  //   expect(screen.getByText(mockProps.contact)).toBeInTheDocument()

  //   expect(screen.getByLabelText('Star rating')).toBeInTheDocument()
  //   expect(screen.getByText(`${mockProps.star}`)).toBeInTheDocument()
  //   expect(screen.getByText(`(${mockProps.reviewCount})`)).toBeInTheDocument()

  //   const link = screen.getByText('매장 정보')
  //   expect(link).toBeInTheDocument()

  //   const backButton = screen.getByRole('link')
  //   expect(backButton).toBeInTheDocument()
  // })

  it('test', () => {})
})
