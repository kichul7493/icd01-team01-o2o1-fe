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
import { useCancelOrder } from '@/features/order/hooks/useCancelOrder'

const OrderCancelDialog = () => {
  const { handleCancelOrder } = useCancelOrder()

  return (
    <AlertDialog>
      <AlertDialogTrigger className="h-8 w-24 rounded-sm border-2">주문 취소</AlertDialogTrigger>
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
  )
}

export default OrderCancelDialog
