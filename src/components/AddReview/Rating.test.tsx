import { render, screen } from '@testing-library/react'
import Rating from './Rating'
import userEvent from '@testing-library/user-event'

describe('Rating', () => {
  it('5개의 버튼(별)이 출력된다.', () => {
    render(<Rating />)

    const buttons = screen.getAllByRole('button')
    const stars = screen.getAllByTestId('starIcon')

    expect(buttons).toHaveLength(5)
    expect(stars).toHaveLength(5)
  })

  it('버튼을 클릭하면 등급이 변경된다. 변경된 등급만큼 버튼(별)의 색상이 변경된다.', async () => {
    render(<Rating />)

    const buttons = screen.getAllByRole('button')
    const stars = screen.getAllByTestId('starIcon')

    await userEvent.click(buttons[2])

    expect(stars[0]).toHaveClass('text-yellow-400')
    expect(stars[1]).toHaveClass('text-yellow-400')
    expect(stars[2]).toHaveClass('text-yellow-400')
    expect(stars[3]).toHaveClass('text-gray-300')
    expect(stars[4]).toHaveClass('text-gray-300')

    await userEvent.click(buttons[4])

    expect(stars[0]).toHaveClass('text-yellow-400')
    expect(stars[1]).toHaveClass('text-yellow-400')
    expect(stars[2]).toHaveClass('text-yellow-400')
    expect(stars[3]).toHaveClass('text-yellow-400')
    expect(stars[4]).toHaveClass('text-yellow-400')
  })
})
