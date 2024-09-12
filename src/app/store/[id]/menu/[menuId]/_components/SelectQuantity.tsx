'use client'
import { useEffect } from 'react'
import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import { useParams } from 'next/navigation'
import { useOptionStore } from '@/features/menu/hooks/useSelectMenuHook'

const SelectQuantity = () => {
  const params = useParams<{
    menuId: string
  }>()
  const { data, isLoading } = useGetStoreDetailInfo()
  const { menuStock, setMenuStock, setMenuPrice, setPrice } = useOptionStore()

  // 해당 메뉴 ID에 맞는 메뉴 정보를 가져오기
  const info = data?.menus?.find((menu) => menu.menuId === Number(params.menuId))

  useEffect(() => {
    if (info?.menuPrice) {
      setMenuPrice(info.menuPrice)
      setPrice(info.menuPrice)
    }
  }, [info, setMenuPrice])

  return (
    <section>
      <header className="p-3 pb-5 pt-[12px]">
        <h1 className="h-6 text-xl font-semibold">{info?.menuName}</h1>
        <p className="pt-3">{info?.description}</p>
      </header>

      <hr className="border-[#DAE3EA]" />

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>가격</span>
        <span>{info?.menuPrice}원</span>
      </div>

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>수량</span>
        <div className="flex items-center gap-3">
          <Button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
            aria-label="Decrease quantity"
            onClick={() => setMenuStock(-1)}
          >
            <Minus size={11} color="#DAE3EA" />
          </Button>
          <span className="w-4 text-center">{menuStock}</span>
          <Button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
            aria-label="Increase quantity"
            onClick={() => setMenuStock(1)}
          >
            <Plus size={11} color="#DAE3EA" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SelectQuantity
