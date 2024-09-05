import React from 'react'
import BackBtn from '@/app/store/[id]/menu/[mid]/_components/BackBtn'
import Thumbnail from './_components/Thumbnail'
import SelectQuantity from './_components/SelectQuantity'
import OptionSelectContainer from './_components/OptionSelectContainer'

const page = () => {
  return (
    <>
      <div className="relative min-h-screen pb-[100px]">
        <BackBtn />
        <Thumbnail
          images={[
            'https://via.placeholder.com/375x220?text=Image+1',
            'https://via.placeholder.com/375x220?text=Image+2',
          ]}
        />
        <SelectQuantity />
        <OptionSelectContainer />
        <div className="fixed bottom-0 left-0 right-0 flex justify-center">
          <button className="w-full max-w-[480px] rounded bg-blue-500 pb-[52px] pt-[24px] text-white">
            배달 카트에 담기
          </button>
        </div>
      </div>
    </>
  )
}

export default page
