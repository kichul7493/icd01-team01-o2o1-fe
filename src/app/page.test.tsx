import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import LoginPage from './page'

import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('LoginPage ', () => {
  it('renders correctly', () => {
    render(<LoginPage />)
    const logo = screen.getByAltText('logo')
    expect(logo).toBeInTheDocument()

    const appName = screen.getByText('배달이써')
    expect(appName).toBeInTheDocument()
  })

  it('카카오 로그인 버튼 렌더링 확인', () => {
    render(<LoginPage />)

    const loginButton = screen.getByRole('button', { name: '카카오로 시작하기' })
    expect(loginButton).toBeInTheDocument()
  })

  it('버튼 클릭 후 data 받아오기 전까지 로딩 스피너 + disabled 확인', async () => {
    const user = userEvent.setup()

    render(<LoginPage />)

    const loginButton = screen.getByRole('button', { name: '카카오로 시작하기' })
    await user.click(loginButton)

    // 버튼이 disabled 상태이고 '카카오로 시작하기' 안보이게
    expect(loginButton).toBeDisabled()
    expect(loginButton).not.toHaveTextContent('카카오로 시작하기')

    // 1초 후 버튼이 다시 활성화되고 원래 텍스트로 돌아오는지 확인
    await waitFor(
      () => {
        expect(loginButton).not.toBeDisabled()
        expect(loginButton).toHaveTextContent('카카오로 시작하기')
      },
      { timeout: 1500 },
    )
  })

  it('로그인 성공시 signup 라우팅', async () => {
    const user = userEvent.setup()

    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({
      query: {},
      push: mockPush,
    })
    render(<LoginPage />)
    const loginButton = screen.getByRole('button', { name: '카카오로 시작하기' })
    await user.click(loginButton)
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/signup')
    })
  })
  it('로그인 실패시 실패 toast', async () => {
    // 아직 미정
  })
})
