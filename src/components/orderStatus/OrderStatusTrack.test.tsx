import { render, screen } from '@testing-library/react'
import OrderStatusTrack from './OrderStatusTrack'

describe('OrderStatusTrack', () => {
  const PendingOrderStatusTrack = () => (
    <OrderStatusTrack address="서울특별시 관악구 OO아파트" status="pending" />
  )

  const AcceptedOrderStatusTrack = () => (
    <OrderStatusTrack
      address="서울특별시 관악구 OO아파트"
      status="accepted"
      orderArrivalTime="오후 05:18"
      remainingDeliveryTime={15}
    />
  )

  const PreparingOrderStatusTrack = () => (
    <OrderStatusTrack
      address="서울특별시 강남구 OO아파트"
      status="preparing"
      orderArrivalTime="오후 05:18"
      remainingDeliveryTime={15}
    />
  )

  const DeliveringOrderStatusTrack = () => (
    <OrderStatusTrack
      address="서울특별시 서초구 OO아파트"
      status="delivering"
      orderArrivalTime="오후 05:18"
      remainingDeliveryTime={15}
    />
  )

  const DeliveredOrderStatusTrack = () => (
    <OrderStatusTrack
      address="경기도 부천시 OO아파트"
      status="delivered"
      orderArrivalTime="오후 05:18"
      remainingDeliveryTime={15}
    />
  )

  const MAIN_COLOR = '#0FA5FA'

  it("주문 상태가 pending일 때 '매장에서 주문을 확인하고 있습니다.'를 출력해야 한다.", () => {
    render(PendingOrderStatusTrack())

    expect(screen.getByText('매장에서 주문을 확인하고 있습니다.')).toBeInTheDocument()
  })

  it('주문 상태가 pending일 때 주문 취소 버튼과 조리 시작 후 취소 불가 문구를 출력해야 한다.', () => {
    render(PendingOrderStatusTrack())

    expect(screen.getByRole('button', { name: '주문 취소' })).toBeInTheDocument()
    expect(screen.getByText('매장에서 조리를 시작하면 취소 할 수 없습니다.')).toBeInTheDocument()
  })

  it('주문 상태와 상관 없이 배달 주소를 출력해야 한다.', () => {
    render(AcceptedOrderStatusTrack())

    expect(screen.getByText('서울특별시 관악구 OO아파트')).toBeInTheDocument()
  })

  it('주문 상태가 pending이 아닐 때 남은 배달 시간과 도착 예정 시간, 배달 단계를 출력해야 한다.', () => {
    render(AcceptedOrderStatusTrack())

    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('오후 05:18 도착예정')).toBeInTheDocument()
    expect(screen.getByText('주문 수락됨')).toBeInTheDocument()
    expect(screen.getByText('메뉴 준비중')).toBeInTheDocument()
    expect(screen.getByText('배달중')).toBeInTheDocument()
    expect(screen.getByText('배달 완료')).toBeInTheDocument()
  })

  it("주문 상태가 accepted일 때 '주문 수락됨'을 출력하고 색상이 main 색상이어야 한다.", () => {
    render(AcceptedOrderStatusTrack())

    expect(screen.getByText('주문 수락됨')).toHaveClass('text-main')
  })

  it("주문 상태가 preparing일 때 '메뉴 준비중'을 출력하고 색상이 main 색상이어야 한다.", () => {
    render(PreparingOrderStatusTrack())

    expect(screen.getByText('메뉴 준비중')).toHaveClass('text-main')
  })

  it("주문 상태가 delivering일 때 '배달중'을 출력하고 색상이 main 색상이어야 한다.", () => {
    render(DeliveringOrderStatusTrack())

    expect(screen.getByText('배달중')).toHaveClass('text-main')
  })

  it("주문 상태가 delivered일 때 '배달 완료'를 출력하고 색상이 main 색상이어야 한다.", () => {
    render(DeliveredOrderStatusTrack())

    expect(screen.getByText('배달 완료')).toHaveClass('text-main')
  })
})
