'use client'

import React from 'react'
import Menu from './Menu'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'

const MenuContainer = () => {
  const { data, isLoading } = useGetStoreDetailInfo()

  return (
    <section aria-labelledby="menu-container-section" className="pt-2">
      {data?.menus.map((item) => (
        <Menu
          key={item.menuId}
          name={item.menuName}
          price={item.menuPrice}
          image={item.menuImages[0]}
        />
      ))}
    </section>
  )
}

export default MenuContainer
