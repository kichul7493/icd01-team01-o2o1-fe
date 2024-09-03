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

  it('should call kakaoLogin and route to home page on successful signup', async () => {
    const mockPush = jest.fn()
    ;(useRouter as jest.Mock).mockReturnValue({ push: mockPush })

    const mockMutate = jest.fn().mockImplementation(async (data) => {
      const result = await mockKakaoLogin(data)
      return result
    })

    ;(useMutation as jest.Mock).mockReturnValue({
      mutate: mockMutate,
      isSuccess: false,
      isError: false,
    })

    const { result } = renderHook(() => useSignUp())

    await result.current.mutate({ accessToken: 'aaaa', subId: 'bbbb', name: 'cccc' })

    await waitFor(() => result.current.isSuccess)
    expect(mockKakaoLogin).toHaveBeenCalledWith({
      accessToken: 'aaaa',
      subId: 'bbbb',
      name: 'cccc',
    })
  })
})
