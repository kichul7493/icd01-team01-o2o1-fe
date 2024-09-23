import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import CategoryButton from '@/app/home/_components/CategoryButton'

describe('CategoryButton', () => {
  const category = '한식'
  const handleClick = jest.fn()

  it('renders correctly with the given props', () => {
    render(<CategoryButton category={category} isSelected={false} onClick={handleClick} />)

    // 버튼이 올바르게 렌더링되는지 확인
    expect(screen.getByText(category)).toBeInTheDocument()
    expect(screen.getByText(category)).toHaveClass('border-black text-black')
  })

  it('applies the selected styles when isSelected is true', () => {
    render(<CategoryButton category={category} isSelected={true} onClick={handleClick} />)

    // 선택된 스타일이 적용되었는지 확인
    const buttonElement = screen.getByText(category)
    expect(buttonElement).toHaveClass('bg-black text-white')
  })

  it('calls the onClick handler when clicked', () => {
    render(<CategoryButton category={category} isSelected={false} onClick={handleClick} />)

    // 버튼을 클릭했을 때 클릭 핸들러가 호출되는지 확인
    const buttonElement = screen.getByText(category)
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
