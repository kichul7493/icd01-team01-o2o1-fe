import axiosInst from '@/lib/axiosInst'
import { Order, OrderDetail } from '../types'

export const getOrderList = async () => {
  const res = await axiosInst.get<{
    response: {
      orders: Order[]
    }
    statusCode: number
    msg: string
  }>(`/order`)

  return res.data
}

export const getOrderStatus = async (orderId: string) => {
  const res = await axiosInst.get<{
    response: OrderDetail
    statusCode: number
    msg: string
  }>(`/order/${orderId}`)

  return res.data
}

export const cancelOrder = async (orderId: string) => {
  return axiosInst.delete(`/order/${orderId}`)
}
