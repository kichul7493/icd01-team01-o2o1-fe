import { BASE_URL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const reviewHandlers = [
  http.get(`${BASE_URL}/store/1/reviews`, ({ request }) => {
    const url = new URL(request.url)

    const page = Number(url.searchParams.get('page')) || 1
    const limit = Number(url.searchParams.get('limit')) || 10

    return HttpResponse.json({
      response: {
        storeName: '철수네 김치찌개',
        reviews: generateRandomReviews(),
        page: page,
        size: limit,
        totalCount: 100,
      },
      statusCode: 200,
      msg: '음식점 조회',
    })
  }),
  http.post(`${BASE_URL}/order/1/review`, async ({ request }) => {
    console.log(await request.json())

    return HttpResponse.json({
      response: {
        reviewId: 11,
      },
      statusCode: 200,
      msg: '리뷰 등록',
    })
  }),
]

interface Review {
  reviewId: number
  contents: string
  rating: number
  reviewImages: string[]
}

// 랜덤 리뷰 데이터를 생성하는 함수
function generateRandomReviews(): Review[] {
  const reviews: Review[] = []

  // 임의의 리뷰 내용
  const contentsList = ['맛잘알', '그저 그래요', '훌륭한 맛', '별로였어요', '다시 먹고 싶어요']

  // 리뷰 객체 10개 생성
  for (let i = 0; i < 10; i++) {
    const randomContent = contentsList[Math.floor(Math.random() * contentsList.length)]
    const randomRating = Math.floor(Math.random() * 5) + 1 // 1에서 5 사이의 숫자

    const review: Review = {
      reviewId: i + 1,
      contents: randomContent,
      rating: randomRating,
      reviewImages: [`https://via.placeholder.com/354x232`, `https://via.placeholder.com/354x232`],
    }

    reviews.push(review)
  }

  return reviews
}
