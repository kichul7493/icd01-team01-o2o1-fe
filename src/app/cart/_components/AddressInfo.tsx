'use client'
import { useRouter } from 'next/navigation'
import { useGetMainAddress } from '@/features/address/query'

const AddressInfo = () => {
  const router = useRouter()
  const { data } = useGetMainAddress()

  return (
    <section className="mb-2 w-full bg-white px-3 pt-6" aria-labelledby="address-info">
      <h2 id="address-info" className="font-semibold">
        주소 정보
      </h2>
      <div className="flex items-center justify-between py-3">
        <address className="not-italic">
          {data?.address} {data?.addressDetail}
        </address>
        <button
          className="text-[#0FA5FA]"
          aria-label="주소 변경"
          onClick={() => router.push('/my/address')}
        >
          변경
        </button>
      </div>
    </section>
  )
}

export default AddressInfo
