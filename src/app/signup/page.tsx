'use client'

import CreateMemberForm from '@/app/signup/_components/CreateMemberForm'
import Footer from '@/components/shared/\bFooter'
import BackButton from '@/components/shared/BackButton'
import Header from '@/components/shared/Header/indes'
import { useSignUpFormHook } from '@/features/member/hooks/useCreateMeberForm'
import React from 'react'

const SignUpPage = () => {
  const { form, handleSubmit } = useSignUpFormHook()
  return (
    <div className="flex min-h-screen flex-col">
      <Header left={<BackButton />} />
      <main className="flex flex-grow justify-center p-14">
        <CreateMemberForm form={form} />
      </main>
      <Footer text="완료" onClick={handleSubmit} />
    </div>
  )
}

export default SignUpPage
