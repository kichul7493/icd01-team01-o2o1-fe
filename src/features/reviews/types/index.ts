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

export type ReviewResponse = {
  reviewId: number
}
