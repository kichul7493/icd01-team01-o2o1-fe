interface InfoProps {
  address: string
  phone: string
  openTime: string
  closeTime: string
  location: boolean
}

const StoreDescribe = ({ address, phone, openTime, closeTime, location }: InfoProps) => {
  return (
    <div className="flex flex-col gap-2 text-base/[18px] font-normal">
      <address className="not-italic">{address}</address>
      <p>전화번호: {phone}</p>
      <p>
        영업 시간: <time>{openTime}</time> ~ <time>{closeTime}</time>
      </p>
      <p>{location ? '배달 가능 지역' : '배달 불가능 지역'}</p>
    </div>
  )
}

export default StoreDescribe
