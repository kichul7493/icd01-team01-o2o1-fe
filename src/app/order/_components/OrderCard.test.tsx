import { render, screen } from '@testing-library/react'
import OrderCard from './OrderCard'
import { Order } from '@/features/order/types'

describe('OrderCard', () => {
  const mockOrder: Order = {
    storeId: 1,
    orderId: 1,
    storeName: 'Test Store',
    orderTime: '2024-09-03',
    orderStatus: 'delivered',
    menus: [
      { menuName: 'Item 1', menuCount: 2, menuPrice: 10000, optionGroups: [], menuId: 1 },
      { menuName: 'Item 2', menuCount: 1, menuPrice: 10000, optionGroups: [], menuId: 2 },
    ],
    orderPrice: 30000,
  }

  test('주문 정보가 올바르게 렌더링된다', () => {
    render(<OrderCard order={mockOrder} />)

    // 상점 이름이 올바르게 표시되는지 확인합니다.
    expect(screen.getByText('Test Store')).toBeInTheDocument()

    // 주문 날짜가 올바르게 표시되는지 확인합니다.
    expect(screen.getByText(/2024\. 9\. 3\./i)).toBeInTheDocument()

    // 배달 상태가 올바르게 표시되는지 확인합니다.
    expect(screen.getByText('배달 완료')).toBeInTheDocument()

    // 메뉴 아이템이 올바르게 렌더링되는지 확인합니다.
    expect(screen.getByText('Item 1 x 2')).toBeInTheDocument()
    expect(screen.getByText('Item 2 x 1')).toBeInTheDocument()

    // 합계 금액이 올바르게 표시되는지 확인합니다.
    expect(screen.getByText('합계 금액: 30,000원')).toBeInTheDocument()

    // '리뷰쓰기' 버튼이 렌더링되는지 확인합니다.
    expect(screen.getByRole('link', { name: /리뷰쓰기/i })).toHaveAttribute(
      'href',
      '/order/1/add-review',
    )
  })

  test('배달 상태가 "배달 중"일 때 올바르게 표시되는지 확인한다', () => {
    const pendingOrder: Order = { ...mockOrder, orderStatus: 'pending' }
    render(<OrderCard order={pendingOrder} />)

    expect(screen.getByText('배달 중')).toBeInTheDocument()
  })
})
