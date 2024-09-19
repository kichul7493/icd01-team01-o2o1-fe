'use client'

import React from 'react'
import Menu from './Menu'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { Skeleton } from '@/components/ui/skeleton'

const MenuContainer = () => {
  const { data, isLoading } = useGetStoreDetailInfo()

  if (isLoading) {
    return (
      <section aria-labelledby="menu-container-section" className="pt-2">
        <div className="space-y-4">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border-b border-[#EEEEEE] py-3.5">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <Skeleton className="mb-2 h-6 w-1/2" /> {/* 제목 스켈레톤 */}
                  <Skeleton className="h-5 w-1/4" /> {/* 가격 스켈레톤 */}
                </div>
                <figure className="relative h-[100px] w-[100px] bg-gray-200">
                  <Skeleton className="h-full w-full" /> {/* 이미지 스켈레톤 */}
                </figure>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }

  if (!data?.menus || data.menus.length === 0) {
    return (
      <section aria-labelledby="menu-container-section" className="pt-4 text-center">
        <p>해당 음식점의 메뉴가 없어요</p>
      </section>
    )
  }

  return (
    <section aria-labelledby="menu-container-section" className="pt-2">
      {data.menus.map((item) => (
        <Menu
          key={item.menuId}
          id={item.menuId}
          name={item.menuName}
          price={item.menuPrice}
          image={item.menuImages[0]}
          isLoading={isLoading}
        />
      ))}
    </section>
  )
}

export default MenuContainer
