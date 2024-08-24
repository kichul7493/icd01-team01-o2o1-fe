import { render, screen } from '@testing-library/react'
import OrderDetail from './OrderDetail'

describe('OrderDetail', () => {
  it('주문 번호, 가게 이름, 주문 목록, 합계 금액을 출력해야 한다.', () => {
    render(
      <OrderDetail
        orderId="12345"
        storeName="굽네치킨"
        orderList={[
          {
            name: '후라이드치킨',
            option: '순살',
            count: 1,
          },
          {
            name: '양념치킨',
            option: '뼈',
            count: 2,
          },
        ]}
        totalPrice="48,000"
      />,
    )

    expect(screen.getByText('12345 주문')).toBeInTheDocument()
    expect(screen.getByText('굽네치킨')).toBeInTheDocument()
    expect(screen.getByText('후라이드치킨')).toBeInTheDocument()
    expect(screen.getByText('순살')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('양념치킨')).toBeInTheDocument()
    expect(screen.getByText('뼈')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('합계: 48,000원')).toBeInTheDocument()
  })
})
