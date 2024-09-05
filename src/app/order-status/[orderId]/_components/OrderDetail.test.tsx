import { render, screen } from '@testing-library/react'
import OrderDetail from './OrderDetail'

describe('OrderDetail', () => {
  it('주문 번호, 가게 이름, 주문 목록, 합계 금액을 출력해야 한다.', () => {
    render(
      <OrderDetail
        orderId={12345}
        storeName="굽네치킨"
        menuList={[
          {
            menuId: 6,
            menuName: '치킨',
            menuCount: 1,
            optionGroup: [
              {
                optionGroupId: 3,
                optionGroupName: '야채',
                option: [
                  {
                    optionId: 89,
                    optionName: '파 추가',
                  },
                ],
              },
            ],
          },
        ]}
        totalPrice="48,000"
      />,
    )

    expect(screen.getByText('12345 주문')).toBeInTheDocument()
    expect(screen.getByText('굽네치킨')).toBeInTheDocument()
    expect(screen.getByText('치킨')).toBeInTheDocument()
    expect(screen.getByText('파 추가')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('합계: 48,000원')).toBeInTheDocument()
  })
})
