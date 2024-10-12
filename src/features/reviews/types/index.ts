export type Review = {
  reviewId: number
  contents: string
  rating: number
  reviewImages: string[]
}

export type ReviewRequest = {
  contents: string
  rating: number
  reviewImages: string[]
}

export interface ReviewListResponse {
  response: {
    storeName: string
    reviews: Review[]
    page: number
    size: number
    totalCount: number
  }
}

export type ReviewResponse = {
  response: {
    reviewId: number
  }
}
