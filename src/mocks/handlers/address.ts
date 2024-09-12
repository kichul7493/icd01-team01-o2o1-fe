import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

const ADDRESS_API_URL = `${BASE_URL}/address`

export const authHandlers = [
  http.post(`${BASE_URL}`, ({ request }) => {
    return HttpResponse.json({
      response: {
        addressId: 1,
      },
      statusCode: 200,
      msg: '주소를 성공적으로 추가했습니다.',
    })
  }),
  // http.get(`/api/auth/session`, ({ request }) => {
  //   return HttpResponse.json({
  //     response: {
  //       name: 'mockName',
  //       accessToken: 'mockToken',
  //       subId: 'mockId',
  //     },
  //     statusCode: 200,
  //     msg: '',
  //   })
  // }),
]
