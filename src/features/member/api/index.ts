import axiosInst from '@/util/axiosInst'

export interface MemberResponse {
  response: {
    memberId: number
    nickName: string
    contact: string
    name: string
  }
  statusCode: number
  msg: string
}

export const getMemberInfo = async () => {
  const { data } = await axiosInst.get<MemberResponse>('/member')
  return data.response
}
