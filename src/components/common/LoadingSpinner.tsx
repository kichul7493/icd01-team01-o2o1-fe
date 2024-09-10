import Spinner from '@images/common/Spinner.svg'
import Image from 'next/image'

export default function LoadingSpinner() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Image src={Spinner} alt={'데이터 로딩중'} />
    </div>
  )
}
