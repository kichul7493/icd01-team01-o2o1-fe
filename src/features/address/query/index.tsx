import {
  deleteAddress,
  getAddressList,
  postAddress,
  updateMainAddress,
} from '@/features/address/api'
import { AddressData } from '../types'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

// 주소 목록 가져오기 (GET 요청)
export const useAddressList = () => {
  return useQuery({
    queryKey: ['addresses'],
    queryFn: getAddressList,
    select: (data) => data.addresses,
  })
}

// 새로운 주소 생성하기 (POST 요청)
export const usePostAddress = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation({
    mutationFn: postAddress,
    onSuccess: () => {
      // 성공하면 주소 목록을 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
      router.push('/my/address')
    },
    onError: (error: any) => {
      console.error('Error posting new address:', error)
    },
  })
}

// 메인 주소 업데이트 (PUT 요청)
export const useUpdateMainAddress = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateMainAddress,
    onSuccess: () => {
      // 성공하면 주소 목록을 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
    },
    onError: (error: Error) => {
      console.error('Error updating main address:', error)
    },
  })
}

export const useDeleteAddress = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteAddress,
    onSuccess: () => {
      // 성공하면 주소 목록을 다시 가져옴
      queryClient.invalidateQueries({ queryKey: ['addresses'] })
    },
    onError: (error: Error) => {
      console.error('Error updating main address:', error)
    },
  })
}
