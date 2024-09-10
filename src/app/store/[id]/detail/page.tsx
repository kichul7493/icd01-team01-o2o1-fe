import React from 'react'
import BackBtn from './_components/BackBtn'
import LocationMap from './_components/LocationMap'
import StoreInfo from './_components/StoreDescribe'
import Thumbnail from './_components/Thumbnail'

const page = () => {
  return (
    <>
      <BackBtn storeTitle={'후라이드 참 잘하는 집'} />
      <LocationMap />
      <main className="px-3 pt-5">
        <StoreInfo
          address={'서울 서초구 반포대로 19길 10 3층'}
          phone={'02-0000-0000'}
          openTime={'11:00'}
          closeTime={'23:00'}
          location={true}
        />
      </main>
      <main className="mb-[153px] mt-[34px]">
        <Thumbnail image={'https://via.placeholder.com/375x220?text=Image+2'} />
      </main>
    </>
  )
}

export default page
