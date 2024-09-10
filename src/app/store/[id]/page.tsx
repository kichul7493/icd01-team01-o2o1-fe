import React from 'react'
import BackBtn from './_components/BackBtn'
import Thumbnail from './_components/Thumbnail'
import StoreInfo from './_components/StoreInfo'
import Menu from './_components/Menu'
import MenuContainer from './_components/MenuContainer'

export default function Page() {
  return (
    <>
      <BackBtn />
      <Thumbnail />
      <main className="mb-14 px-3 py-2">
        <StoreInfo />
        <MenuContainer />
      </main>
    </>
  )
}
