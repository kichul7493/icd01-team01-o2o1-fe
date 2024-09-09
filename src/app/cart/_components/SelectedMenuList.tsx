'use client'
import MenuCard from './MenuCard'

const SelectedMenuList = () => {
  return (
    <div className="mb-2 bg-white p-3 pb-0">
      <div className="w-full border-b border-[#DAE3EA] pb-3 font-semibold">
        <div>후라이드 참 잘하는 집 미아점</div>
      </div>
      <MenuCard
        menuName="후라이드치킨"
        price={32000}
        count={2}
        options={[{ optionName: '순살', optionPrice: 1000 }]}
      />
      <MenuCard
        menuName="후라이드치킨"
        price={32000}
        count={2}
        options={[{ optionName: '순살', optionPrice: 1000 }]}
      />
      <MenuCard
        menuName="후라이드치킨"
        price={32000}
        count={2}
        options={[{ optionName: '순살', optionPrice: 1000 }]}
      />
      <div className="border-t border-[#DAE3EA]" />
      <div className="flex justify-center py-7">
        <button className="text-base/[18px] text-[#0FA5FA]">+ 메뉴추가</button>
      </div>
    </div>
  )
}

export default SelectedMenuList
