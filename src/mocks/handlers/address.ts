import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const addressHandlers = [
  http.get(`${BASE_URL}/address`, ({ request }) => {
    return HttpResponse.json({
      response: {
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
          {
            addressId: 2,
            latitude: 37.5665,
            longitude: 126.978,
            address: '서울시 블라',
            addressDetail: '몇동 몇호',
            zipCode: '12345',
            addressStatus: 'sub',
          },
        ],
      },
      statusCode: 200,
      msg: '회원 정보를 조회하였습니다',
    })
  }),
]
