'use client'
import { useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { useParams } from 'next/navigation'
import { useMenuSelectStore } from '@/features/menu/hooks/useMenuSelectHook'
import { MinusButton, PlusButton } from '@/components/shared/StockChangeButton'

const SelectQuantity = () => {
  const params = useParams<{ id: string; menuId: string }>()
  const { data } = useGetStoreDetailInfo()
  const { setMenuPrice, setMenuCount, menuCount, menuPrice } = useMenuSelectStore()

  const info = data?.menus?.find((menu) => menu.menuId === Number(params.menuId))

  useEffect(() => {
    if (info?.menuPrice !== undefined) {
      setMenuPrice(info.menuPrice)
    }
  }, [info, setMenuPrice])

  useEffect(() => {
    // Update the menuPrice whenever menuCount changes
    if (menuPrice !== null) {
      setMenuPrice((menuPrice / menuCount) * (menuCount || 1))
    }
  }, [menuCount, menuPrice, setMenuPrice])

  return (
    <section>
      <header className="p-3 pb-5 pt-[12px]">
        <h1 className="h-6 text-xl font-semibold">{info?.menuName}</h1>
        <p className="pt-3">{info?.description}</p>
      </header>

      <hr className="border-[#DAE3EA]" />

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>가격</span>
        <span>{menuPrice !== null ? menuPrice.toLocaleString() : ''}원</span>
      </div>

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>수량</span>
        <div className="flex items-center gap-3">
          <MinusButton onClick={() => setMenuCount(-1, Number(info?.menuPrice))} />
          <span className="w-4 text-center">{menuCount}</span>
          <PlusButton onClick={() => setMenuCount(1, Number(info?.menuPrice))} />
        </div>
      </div>
    </section>
  )
}

export default SelectQuantity
