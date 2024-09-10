import { NextResponse, NextRequest } from 'next/server'

const categories = [
  '1인분',
  '족발·보쌈',
  '돈까스·회·일식',
  '고기·구이',
  '찜·탕·찌개',
  '양식',
  '중식',
  '아시안',
  '치킨',
  '백반·죽·국수',
  '버거',
  '카페·디저트',
  '분식',
]

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json(categories)
}
