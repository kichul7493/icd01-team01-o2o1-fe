'use client'

import CreateMemberForm from '@/app/signup/_components/CreateMemberForm'
import Footer from '@/components/shared/Footer'
import BackButton from '@/components/shared/BackButton'
import Header from '@/components/shared/Header'
import { useSignUpFormHook } from '@/features/member/hooks/useCreateMemberForm'
import React, { useEffect, useState } from 'react'
import { Address } from '@/features/member/types'

const SignUpPage = () => {
  const form = useSignUpFormHook()
  const [addressData, setAddressData] = useState<Address>()

  const handleSubmit = () => {
    const nickName = form.getValues('nickName')
    const contact = form.getValues('contact')
    const address = {
      ...addressData,
      addressDetail: form.getValues('addressDetail'),
    }

    const formData = {
      nickName,
      contact,
      address,
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header left={<BackButton />} />
      <main className="flex flex-grow justify-center p-14">
        <CreateMemberForm form={form} setAddress={setAddressData} />
      </main>
      <Footer
        text="완료"
        disabled={!form.formState.isValid || !addressData?.address}
        onClick={() => handleSubmit()}
      />
    </div>
  )
}

export default SignUpPage
