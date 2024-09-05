import axiosInst from '@/util/axiosInst'

type SignUpResponseType = {
  isSignup: boolean
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
  const { data } = await axiosInst.post<SignUpResponseType>(
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
