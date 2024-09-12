import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

const ADDRESS_API_URL = `${BASE_URL}/address`

export const addressHandlers = [
  http.post(`${ADDRESS_API_URL}`, ({ request }) => {
    return HttpResponse.json({
      response: {
        addressId: 1,
      },
      statusCode: 200,
      msg: '주소를 성공적으로 추가했습니다.',
    })
  }),
  http.get(`${ADDRESS_API_URL}`, ({ request }) => {
    return HttpResponse.json({
      addresses: [
        {
          addressId: 1,
          latitude: 37.5665,
          longitude: 126.978,
          address: '서울시 블라',
          addressDetail: '몇동 몇호',
          zipCode: '12345',
          addressStatus: 'main',
        },
      ],
    })
  }),
]
