import React from 'react'
import BackBtn from './_components/BackBtn'
import Thumbnail from './_components/Thumbnail'
import StoreInfo from './_components/StoreInfo'
import Menu from './_components/Menu'

export default function Page() {
  return (
    <>
      <BackBtn storeTitle="후라이드 참 잘하는 집" />
      <Thumbnail
        images={[
          'https://via.placeholder.com/375x220?text=Image+1',
          'https://via.placeholder.com/375x220?text=Image+2',
        ]}
      />
      <main className="mb-14 px-3 py-2">
        <StoreInfo
          address="서울 서초구 반포대로 19길 10 3층"
          contact="02-000-0000"
          star={4.7}
          reviewCount={169}
        />
        <section aria-labelledby="menu-container-section" className="pt-2">
          {[
            {
              name: '후라이드치킨',
              price: 15000,
              image: 'https://via.placeholder.com/100x100?text=Image+1',
            },
            {
              name: '후라이드치킨',
              price: 15000,
              image: 'https://via.placeholder.com/100x100?text=Image+1',
            },
            {
              name: '후라이드치킨',
              price: 15000,
              image: 'https://via.placeholder.com/100x100?text=Image+1',
            },
            {
              name: '후라이드치킨',
              price: 15000,
              image: 'https://via.placeholder.com/100x100?text=Image+1',
            },
          ].map((item, index) => (
            <Menu key={index} name={item.name} price={item.price} image={item.image} />
          ))}
        </section>
      </main>
    </>
  )
}
