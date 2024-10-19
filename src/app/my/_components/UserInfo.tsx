'use client'

import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'
import { Skeleton } from '@/components/ui/skeleton'
import { useGetMemberHooks } from '@/features/member/hooks/useGetMemberHook'
import React from 'react'

const UserInfo = () => {
  const { data, isLoading, isError, refetch } = useGetMemberHooks()

  if (isError)
    return (
      <ExceptionScreen refetch={refetch} message="회원 정보를 불러오는 중에 문제가 발생했습니다." />
    )

  if (isLoading)
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-36" />
      </div>
    )

  return (
    <div>
      <div className="text-xl">{data?.nickName}</div>
      <div>{data?.contact}</div>
    </div>
  )
}

export default UserInfo
