import { renderHook, act, waitFor } from '@testing-library/react'
import { useRouter } from 'next/navigation'
import { useSignUp } from '../hooks'
import { useMutation } from '@tanstack/react-query'

// Mocks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(),
}))

// Mock kakaoLogin function
const mockKakaoLogin = jest.fn()

describe('useSignUp hook', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('isSignup true일때 home으로 이동', async () => {
    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })
    let onSuccessCallback: (data: any) => void

    const mockMutate = jest.fn().mockImplementation(async (data) => {
      const result = await mockKakaoLogin(data)
      onSuccessCallback(result)
      return result
    })

    ;(useMutation as jest.Mock).mockImplementation(({ onSuccess }) => {
      onSuccessCallback = onSuccess
      return {
        mutate: mockMutate,
        isSuccess: false,
        isError: false,
      }
    })

    mockKakaoLogin.mockResolvedValue({ isSignup: true })

    const { result } = renderHook(() => useSignUp())

    await act(async () => {
      await result.current.mutate({ accessToken: 'mockToken', subId: 'mockId', name: 'mockName' })
    })

    expect(mockKakaoLogin).toHaveBeenCalledWith({
      accessToken: 'mockToken',
      subId: 'mockId',
      name: 'mockName',
    })

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/home')
    })
  })
})
