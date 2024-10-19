'use client'

import React from 'react'
import ImageUploader from './ImageUploader'
import Rating from './Rating'
import usePostReview from '@/features/reviews/hooks/usePostReview'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'

const ReviewForm = () => {
  const { postReview, isPending } = usePostReview()
  const [rating, setRating] = React.useState<number>(0)
  const [contents, setContents] = React.useState<string>('')
  const { data, isLoading, isError, refetch } = useGetStoreDetailInfo()

  const handleChangeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value)
  }

  const handleChangeRating = (rating: number) => {
    setRating(rating)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    postReview({
      rating: rating,
      contents: contents,
      reviewImages: [],
    })
  }

  if (isError) {
    return (
      <ExceptionScreen refetch={refetch} message="매장 정보를 불러오는 중 에러가 발생했습니다." />
    )
  }

  if (isLoading) {
    return <LoadingSpinner isFullScreen />
  }

  return (
    <form className="px-10" onSubmit={handleSubmit}>
      <p className="mb-4 font-semibold">{data?.storeName}</p>
      <Rating value={rating} handleChange={handleChangeRating} />
      <textarea
        onChange={handleChangeContents}
        className="mb-4 h-40 w-full resize-none rounded border border-gray-300 p-4"
        placeholder="리뷰를 작성해주세요."
      ></textarea>
      <ImageUploader />
      <p className="mt-1 text-xs text-red-500">이미지 업로드 기능은 공사 중입니다.</p>
      <button
        className="absolute bottom-0 left-0 z-[100] h-24 w-full bg-main text-xl font-semibold text-white"
        type="submit"
      >
        {isPending ? <LoadingSpinner /> : '등록하기'}
      </button>
    </form>
  )
}

export default ReviewForm
