import React from 'react'
import BackBtn from './_components/BackBtn'
import LocationMap from './_components/LocationMap'
import StoreInfo from './_components/StoreDescribe'
import Thumbnail from './_components/Thumbnail'

const page = () => {
  return (
    <>
      <BackBtn />
      <LocationMap />
      <main className="px-3 pt-5">
        <StoreInfo />
      </main>
      <main className="mb-[153px] mt-[34px]">
        <Thumbnail />
      </main>
    </>
  )
}

export default page
