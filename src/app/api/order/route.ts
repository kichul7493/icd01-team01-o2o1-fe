import { NextResponse } from 'next/server'

const orders = [
  {
    id: 1,
    storeName: '우리집 밥상',
    date: '2022-07-11 오후 07:06',
    deliveryStatus: 'Delivered',
    menuItems: [
      { name: '김치찌개', quantity: 2 },
      { name: '불고기', quantity: 1 },
    ],
    totalAmount: 25000,
  },
  {
    id: 2,
    storeName: '홍콩반점',
    date: '2024-08-11 오후 07:06',
    deliveryStatus: 'Delivered',
    menuItems: [{ name: '짜장면', quantity: 3 }],
    totalAmount: 18000,
  },
  {
    id: 3,
    storeName: '베이커리 카페',
    date: '2024-08-10 오후 07:06',
    deliveryStatus: 'Delivered',
    menuItems: [{ name: '소금빵', quantity: 5 }],
    totalAmount: 20000,
  },
  {
    id: 4,
    storeName: '아시안 가든',
    date: '2022-07-11 오후 07:06',
    deliveryStatus: 'Delivered',
    menuItems: [{ name: '분짜', quantity: 1 }],
    totalAmount: 12000,
  },
]

export async function GET() {
  return NextResponse.json(orders)
}
