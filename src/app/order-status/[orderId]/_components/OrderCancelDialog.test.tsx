import { render, screen } from '@testing-library/react'
import OrderCancelDialog from './OrderCancelDialog'
import userEvent from '@testing-library/user-event'
import { useCancelOrder } from '@/features/orderStatus/hooks/useCancelOrder'

jest.mock('../../../../features/orderStatus/hooks/useCancelOrder.ts')

describe('OrderCancelDialog', () => {
  const mockHandleCancelOrder = jest.fn()

  it('주문 취소 버튼을 클릭하면 취소 모달이 뜨고, 취소하기 버튼을 클릭하면 handleCancelOrder 함수가 호출되어야 한다.', async () => {
    ;(useCancelOrder as jest.Mock).mockReturnValue({
      handleCancelOrder: mockHandleCancelOrder,
    })

    render(<OrderCancelDialog />)

    const cancelButton = screen.getByRole('button', { name: '주문 취소' })

    await userEvent.click(cancelButton)

    const cancelModal = screen.getByText('정말 주문을 취소하실건가요?')

    expect(cancelModal).toBeInTheDocument()

    const cancelOrderButton = screen.getByRole('button', { name: '취소하기' })

    await userEvent.click(cancelOrderButton)

    expect(mockHandleCancelOrder).toHaveBeenCalled()
  })
})
