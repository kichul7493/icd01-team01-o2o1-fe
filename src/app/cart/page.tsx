import { X } from 'lucide-react'
import BackButton from '@/components/shared/BackButton'

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
        <div className="mb-2 w-full bg-white px-3 pt-6">
          <div className="font-semibold">정보</div>
          <div className="flex items-center justify-between py-3">
            <div>서울특별시 관악구 OO아파트</div>
            <button className="text-[#0FA5FA]">변경</button>
          </div>
        </div>
        <div className="mb-2 bg-white p-3 pb-0">
          <div className="w-full border-b border-[#DAE3EA] pb-3 font-semibold">
            <div>후라이드 참 잘하는 집 미아점</div>
          </div>
          <div>
            <div className="flex justify-between py-8">
              <div className="flex flex-col gap-2">
                <div className="text-base/[18px]">후라이드치킨</div>
                <div className="text-base/[18px]">순살 (+1,000원)</div>
                <div className="text-base/[18px]">32,000원</div>
              </div>
              <div className="flex flex-col justify-between">
                <X />
                <div className="align-middle">2</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-8">
              <div className="flex flex-col gap-2">
                <div className="text-base/[18px]">후라이드치킨</div>
                <div className="text-base/[18px]">순살 (+1,000원)</div>
                <div className="text-base/[18px]">32,000원</div>
              </div>
              <div className="flex flex-col justify-between">
                <X />
                <div className="align-middle">2</div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between py-8">
              <div className="flex flex-col gap-2">
                <div className="text-base/[18px]">후라이드치킨</div>
                <div className="text-base/[18px]">순살 (+1,000원)</div>
                <div className="text-base/[18px]">32,000원</div>
              </div>
              <div className="flex flex-col justify-between">
                <X />
                <div className="align-middle">2</div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#DAE3EA]" />
          <div className="flex justify-center py-7">
            <button className="text-base/[18px] text-[#0FA5FA]">+ 메뉴추가</button>
          </div>
        </div>
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
