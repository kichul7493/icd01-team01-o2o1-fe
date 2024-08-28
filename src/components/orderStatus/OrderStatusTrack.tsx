import { OrderStatus } from '@/features/order-status/types'
import clsx from 'clsx'
import { Dot } from 'lucide-react'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useStreamOrderStatus } from '@/features/order-status/hooks/useStreamOrderStatus'
import { OrderStatusItemList } from '@/constants/order'

interface OrderDetailProps {
  orderId: number
  status: OrderStatus
  address: string
  handleCancelOrder: () => void
}

const OrderStatusTrack = ({ orderId, status, address, handleCancelOrder }: OrderDetailProps) => {
  const { orderStatus } = useStreamOrderStatus({ orderId, initStatus: status })

  return (
    <div className="border-b-2">
      {/* 주문 수락 전 */}
      {orderStatus === 'pending' && (
        <>
          <div className="mb-8 flex items-center gap-4">
            <Dot className="text-main" />
            <p className="text-base font-semibold text-main">매장에서 주문을 확인하고 있습니다.</p>
          </div>
          <div className="mb-12 flex flex-col items-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger className="h-8 w-24 rounded-sm border-2">
                주문 취소
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>정말 주문을 취소하실건가요?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>주문이 취소되면 복구할 수 없습니다.</AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>돌아가기</AlertDialogCancel>
                  <AlertDialogAction onClick={handleCancelOrder}>취소하기</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <p className="text-sm">매장에서 조리를 시작하면 취소 할 수 없습니다.</p>
          </div>
        </>
      )}
      {/* 주문 수락 후 */}
      {orderStatus !== 'pending' && (
        <ul className="mb-6 ml-6 mt-6 flex flex-col gap-4">
          {OrderStatusItemList.map((item) => (
            <li key={item.status} className="flex">
              <Dot className={orderStatus === item.status ? 'text-main' : ''} />
              <p
                className={clsx('font-semibold', {
                  'text-main': orderStatus === item.status,
                })}
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-col gap-4 pb-12">
        <p className="text-xl font-semibold">배달 주소</p>
        <p>{address}</p>
      </div>
    </div>
  )
}

export default OrderStatusTrack
