import axiosInst from '@/lib/axiosInst'

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
  const { data, headers } = await axiosInst.post<Promise<SignUpResponseType>>(
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

  headers['authorization'] && localStorage.setItem('accessToken', headers['authorization'])
  headers['refreshauth'] && localStorage.setItem('refreshToken', headers['refreshauth'])
  return data
}
