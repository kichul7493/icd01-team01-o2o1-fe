import axiosInst from '@/util/axiosInst'

type SignUpResponseType = {
  isSignup: boolean
}

export const kakaoLogin = async ({ accessToken }: { accessToken: string }) => {
  const { data } = await axiosInst.post<SignUpResponseType>(
    '/login',
    {
      snsType: 'kakao',
      name: '김아무개',
      subId: '341241312',
      email: 'kakaoLoginEmail@kakao.com',
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )

  return data
}
