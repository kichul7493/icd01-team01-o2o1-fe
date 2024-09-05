import { Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SelectQuantity = () => {
  return (
    <section>
      <header className="p-3 pb-6 pt-[12px]">
        <h1 className="text-xl font-semibold">후라이드치킨</h1>
      </header>

      <hr className="border-[#DAE3EA]" />

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>가격</span>
        <span>15,000원</span>
      </div>

      <div className="flex justify-between px-3 py-[18px] text-base font-semibold">
        <span>수량</span>
        <div className="flex items-center gap-3">
          <Button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
            aria-label="Increase quantity"
          >
            <Plus size={11} color="#DAE3EA" />
          </Button>
          <span>0</span>
          <Button
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#DAE3EA] bg-white p-2"
            aria-label="Decrease quantity"
          >
            <Minus size={11} color="#DAE3EA" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default SelectQuantity
