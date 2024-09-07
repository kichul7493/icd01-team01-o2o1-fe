'use client'

import { useGetMemberHooks } from '@/features/member/hooks/useGetMemberHook'
import React from 'react'

const UserInfo = () => {
  const { data, isLoading } = useGetMemberHooks()
  if (isLoading) return <div>로딩중...</div>

  return (
    <div>
      <div className="text-xl">{data!.nickName}</div>
      <div>{'010-0000-0000'}</div>
    </div>
  )
}

export default UserInfo
