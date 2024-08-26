import { baseURL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const reviewHandlers = [
  http.get(`${baseURL}/store/test/reviews`, () => {
    return HttpResponse.json({
      response: {
        reviews: [
          {
            reviewId: 1,
            contents: '맛잘알',
            rating: 5,
            reviewImages: ['url'],
          },
          {
            reviewId: 2,
            contents: '노맛',
            rating: 1,
            reviewImages: [],
          },
        ],
        page: 1,
        size: 10,
        totalCount: 100,
      },
      statusCode: 200,
      msg: '음식점 조회',
    })
  }),
]
