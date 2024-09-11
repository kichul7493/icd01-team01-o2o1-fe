import { render, screen } from '@testing-library/react'
import StoreDescribe from './StoreDescribe'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('StoreInfo 컴포넌트', () => {
  it('test', () => {})

  // const NotAvailableForDelivery = () => {
  //   return <StoreDescribe />
  // }

  // const AvailableForDelivery = () => {
  //   return <StoreDescribe />
  // }

  // it('주소, 전화번호, 영업시간, 지역정보가 올바르게 렌더링되는지 확인한다.', () => {
  //   render(<AvailableForDelivery />)
  //   expect(screen.getByText('서울 강남구 삼각동 삼성동')).toBeInTheDocument()
  //   expect(screen.getByText('전화번호: 010-1234-5678')).toBeInTheDocument()
  //   // expect(screen.getByText('09:00 ~ 21:00')).toBeInTheDocument()
  //   // expect(screen.getByText('영업 시간: 09:00 ~ 21:00')).toBeInTheDocument()
  // })

  // describe('배달 가능 여부가 올바르게 렌더링되는지 확인한다.', () => {
  //   it('배달 가능 여부가 true일 경우 주문 가능 여부 텍스트가 렌더링되어야 한다.', () => {
  //     render(<AvailableForDelivery />)
  //     expect(screen.getByText('배달 가능 지역')).toBeInTheDocument()
  //   })

  //   it('배달 가능 여부가 false일 경우 배달 불가능 여부 텍스트가 렌더링되어야 한다.', () => {
  //     render(<NotAvailableForDelivery />)
  //     expect(screen.getByText('배달 불가능 지역')).toBeInTheDocument()
  //   })
  // })
})
