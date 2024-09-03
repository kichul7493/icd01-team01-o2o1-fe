import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const authHandlers = [
  http.post(`${BASE_URL}/login`, ({ request }) => {
    console.log(request)
    return HttpResponse.json({
      response: {
        isSignup: true,
      },
      statusCode: 200,
      msg: '',
    })
  }),
  http.get(`/api/auth/session`, ({ request }) => {
    return HttpResponse.json({
      response: {
        name: 'mockName',
        accessToken: 'mockToken',
        subId: 'mockId',
      },
      statusCode: 200,
      msg: '',
    })
  }),
]
