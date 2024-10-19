import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h2>잘못된 경로입니다.</h2>
      <Link href="/">홈화면으로 돌아가기</Link>
    </div>
  )
}
