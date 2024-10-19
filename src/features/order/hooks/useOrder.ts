import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getOrderList } from '../api'

const useOrder = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrderList,
  })

  return {
    orders: data?.response.orders,
    isLoading,
    isError,
    refetch,
  }
}

export default useOrder
