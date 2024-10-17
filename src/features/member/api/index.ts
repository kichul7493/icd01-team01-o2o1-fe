import axiosInst from '@/lib/axiosInst'
import { CreateMemberRequest, MemberAddressResponse, MemberResponse } from '../types'

export const getMemberInfo = async () => {
  const { data } = await axiosInst.get<MemberResponse>('/member')
  return data.response
}

export const createMember = async (formData: CreateMemberRequest) => {
  const { data } = await axiosInst.post<MemberResponse>('/member', { ...formData })
  return data.statusCode === 200
}

export const getMemberAddress = async () => {
  const { data } = await axiosInst.get<MemberAddressResponse>('/address')
  return data.response
}

export const deleteMember = async () => {
  const { data } = await axiosInst.delete<MemberResponse>('/member')
  return data.statusCode === 200
}
