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
        <Thumbnail image={'https://via.placeholder.com/375x220?text=Image+2'} />
      </main>
    </>
  )
}

export default page
