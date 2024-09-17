import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AddressContainer from '@/components/home/AddressContainer'
import useGetMemberAddress from '@/features/member/hooks/useGetMemberAddress'
import { Address } from '@/features/member/types'

const mockAddress: Address = {
  addressStatus: 'main',
  address: '서울특별시 중구 명동길 74',
  addressDetail: '지하 1층',
  zipCode: '04536',
  latitude: 37.5662952,
  longitude: 126.9779451,
}

jest.mock('../../features/member/hooks/useGetMemberAddress.tsx', () => {
  return () => {
    return {
      data: {
        addresses: [mockAddress],
      },
    }
  }
})

describe('AddressContainer 컴포넌트', () => {
  it('주소가 올바르게 렌더링되는지 확인합니다', () => {
    render(<AddressContainer />)
    expect(
      screen.getByText(mockAddress.address + ' ' + mockAddress.addressDetail),
    ).toBeInTheDocument()
  })
})
