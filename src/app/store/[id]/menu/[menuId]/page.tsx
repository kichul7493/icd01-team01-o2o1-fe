'use client'

import React from 'react'
import Thumbnail from './_components/Thumbnail'
import SelectQuantity from './_components/SelectQuantity'
import OptionSelectContainer from './_components/OptionSelectContainer'
import BackButton from '@/components/shared/BackButton'
import { useOptionStore } from '@/features/menu/hooks/useSelectMenuHook'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { useParams } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'

const Page = () => {
  const { selectedOptions, menuStock, price } = useOptionStore()
  const { data } = useGetStoreDetailInfo()
  const params = useParams<{
    menuId: string
  }>()
  const { toast } = useToast()

  const optionGroups =
    data?.menus?.find((menu) => menu.menuId === Number(params.menuId))?.optionGroups || []

  const calculateTotalPrice = () => {
    let totalPrice = 0

    optionGroups.forEach((group) => {
      const selectedOptionIds = selectedOptions[group.optionGroupId]
      if (selectedOptionIds) {
        group.options.forEach((option) => {
          if (selectedOptionIds.includes(option.optionId)) {
            totalPrice += option.optionPrice
          }
        })
      }
    })

    return totalPrice
  }

  const clickBtn = () => {
    const requiredOptionGroups = optionGroups.filter((group) => group.isRequired)

    const missingOptions = requiredOptionGroups.filter(
      (group) => !selectedOptions[group.optionGroupId],
    )

    if (missingOptions.length > 0) {
      toast({
        variant: 'destructive',
        title: '필수 옵션을 선택해주세요',
        duration: 1500,
      })
    } else {
      console.log({
        mid: params.menuId,
        stock: menuStock,
        selectedOptions,
        price: price + calculateTotalPrice(),
      })
    }
  }

  return (
    <>
      <div className="relative min-h-screen pb-[100px]">
        <header className="absolute top-0 z-10 flex h-14 w-full items-center p-4">
          <BackButton />
        </header>
        <Thumbnail />
        <SelectQuantity />
        <OptionSelectContainer />
        <div className="fixed bottom-0 left-0 right-0 flex justify-center">
          <button
            className="w-full max-w-[480px] rounded bg-blue-500 pb-[52px] pt-[24px] text-white"
            onClick={clickBtn}
          >
            배달 카트에 담기
          </button>
        </div>
      </div>
    </>
  )
}

export default Page
