import { render, screen } from '@testing-library/react'
import OrderStatusTrack from './OrderStatusTrack'
import { useStreamOrderStatus } from '@/features/order/hooks/useStreamOrderStatus'
import { useCancelOrder } from '@/features/order/hooks/useCancelOrder'

jest.mock('../../../../features/order/hooks/useStreamOrderStatus.ts')
jest.mock('../../../../features/order/hooks/useCancelOrder.ts')

describe('OrderStatusTrack', () => {
  const mockHandleCancelOrder = jest.fn()

  ;(useCancelOrder as jest.Mock).mockReturnValue({
    handleCancelOrder: mockHandleCancelOrder,
  })

  const renderOrderStatusTrack = () => (
    <OrderStatusTrack orderId={1} address="서울특별시 관악구 OO아파트" status="pending" />
  )

  const MAIN_COLOR = '#0FA5FA'

  it("주문 상태가 pending일 때 '매장에서 주문을 확인하고 있습니다.'를 출력해야 한다.", () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'pending',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('매장에서 주문을 확인하고 있습니다.')).toBeInTheDocument()
  })

  it('주문 상태가 pending일 때 주문 취소 버튼과 조리 시작 후 취소 불가 문구를 출력해야 한다.', () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'pending',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByRole('button', { name: '주문 취소' })).toBeInTheDocument()
    expect(screen.getByText('매장에서 조리를 시작하면 취소 할 수 없습니다.')).toBeInTheDocument()
  })

  it('주문 상태와 상관 없이 배달 주소를 출력해야 한다.', () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'pending',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('서울특별시 관악구 OO아파트')).toBeInTheDocument()
  })

  it('주문 상태가 pending이 아닐 때 배달 단계를 출력해야 한다.', () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'accepted',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('주문 수락됨')).toBeInTheDocument()
    expect(screen.getByText('메뉴 준비중')).toBeInTheDocument()
    expect(screen.getByText('배달중')).toBeInTheDocument()
    expect(screen.getByText('배달 완료')).toBeInTheDocument()
  })

  it("주문 상태가 accepted일 때 '주문 수락됨'을 출력하고 색상이 main 색상이어야 한다.", () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'accepted',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('주문 수락됨')).toHaveClass('text-main')
  })

  it("주문 상태가 preparing일 때 '메뉴 준비중'을 출력하고 색상이 main 색상이어야 한다.", () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'preparing',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('메뉴 준비중')).toHaveClass('text-main')
  })

  it("주문 상태가 delivering일 때 '배달중'을 출력하고 색상이 main 색상이어야 한다.", () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'delivering',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('배달중')).toHaveClass('text-main')
  })

  it("주문 상태가 delivered일 때 '배달 완료'를 출력하고 색상이 main 색상이어야 한다.", () => {
    ;(useStreamOrderStatus as jest.Mock).mockReturnValue({
      orderStatus: 'delivered',
    })

    render(renderOrderStatusTrack())

    expect(screen.getByText('배달 완료')).toHaveClass('text-main')
  })
})
