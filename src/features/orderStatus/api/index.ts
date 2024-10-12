import axiosInst from '@/lib/axiosInst'
import { Order } from '../types'

export const getOrderStatus = async (orderId: string) => {
  const res = await axiosInst.get<{
    response: Order
    statusCode: number
    msg: string
  }>(`/order/${orderId}`)

  return res.data
}

export const cancelOrder = async (orderId: string) => {
  return axiosInst.delete(`/order/${orderId}`)
}
