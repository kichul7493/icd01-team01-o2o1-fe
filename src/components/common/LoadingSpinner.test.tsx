import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LoadingSpinner from '@/components/common/LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders the loading spinner image correctly', () => {
    render(<LoadingSpinner />)

    // 이미지 요소가 alt 텍스트 '데이터 로딩중'과 함께 렌더링되었는지 확인
    const spinnerImage = screen.getByAltText('데이터 로딩중')
    expect(spinnerImage).toBeInTheDocument()

    // 이미지 소스가 올바른지 확인
    expect(spinnerImage.tagName).toBe('IMG') // 'next/image'가 'img' 요소로 렌더링됨
  })

  it('centers the loading spinner in the viewport', () => {
    render(<LoadingSpinner />)

    // 부모 div의 클래스 이름을 확인하여 spinner가 중앙에 있는지 확인
    const spinnerContainer = screen.getByRole('img').parentElement
    expect(spinnerContainer).toHaveClass('flex h-screen items-center justify-center')
  })
})
