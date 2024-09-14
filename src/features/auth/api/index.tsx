import axiosInst from '@/util/axiosInst'

type SignUpResponseType = {
  response: {
    isSignup: false
  }
  statusCode: number
  msg: string
}

export const oAuthLogin = async ({
  accessToken,
  subId,
  name,
}: {
  accessToken: string
  subId: string
  name: string
}) => {
  const { data } = await axiosInst.post<Promise<SignUpResponseType>>(
    '/login',
    {
      snsType: 'kakao',
      name,
      subId,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  )
  return data
}
