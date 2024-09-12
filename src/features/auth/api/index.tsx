import axiosInst from '@/util/axiosInst'

type SignUpResponseType = {
  response: {
    isSignup: false
  }
  statusCode: number
  msg: string
}

export const OAuthLogin = async ({
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

  headers['Authorization'] && localStorage.setItem('accessToken', headers['Authorization'])
  headers['RefreshAuth'] && localStorage.setItem('refreshToken', headers['RefreshAuth'])
  return data
}
