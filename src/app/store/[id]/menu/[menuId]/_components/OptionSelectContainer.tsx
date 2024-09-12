'use client'

// OptionSelectContainer.tsx
import OptionSelect from './OptionSelect'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { useParams } from 'next/navigation'

const OptionSelectContainer = () => {
  const params = useParams<{
    menuId: string
  }>()
  const { data, isLoading } = useGetStoreDetailInfo()

  const optionGroups =
    data?.menus?.find((menu) => menu.menuId === Number(params.mid))?.optionGroups || []

  return (
    <>
      <OptionSelect optionGroups={optionGroups} />
    </>
  )
}

export default OptionSelectContainer
