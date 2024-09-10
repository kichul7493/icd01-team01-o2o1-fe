import { X } from 'lucide-react'
import BackButton from '@/components/shared/BackButton'
import AddressInfo from './_components/AddressInfo'
import SelectedMenuList from './_components/SelectedMenuList'
const page = () => {
  return (
    <div className="relative min-h-screen pb-[100px]">
      <header className="relative flex w-full items-center justify-center bg-white p-4">
        <button aria-label="Go back" className="absolute left-4 flex items-center">
          <X />
        </button>
        <h1 className="text-lg font-semibold">카트</h1>
      </header>
      <div className="h-full bg-[#DAE3EA]">
        <AddressInfo address={'서울특별시 관악구 OO아파트'} />
        <SelectedMenuList />
        <div className="h-[100px] w-full bg-white p-3">
          <div className="pb-3 font-semibold">결제수단</div>
          <div>카카오페이</div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex justify-center">
        <button className="w-full max-w-[480px] rounded bg-[#0FA5FA] pb-[52px] pt-[24px] text-white">
          배달 주문 45,000원 결제하기
        </button>
      </div>
    </div>
  )
}

export default page
