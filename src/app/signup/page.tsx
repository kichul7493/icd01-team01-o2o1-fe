'use client'

import Footer from '@/components/shared/\bFooter'
import BackButton from '@/components/shared/BackButton'
import Header from '@/components/shared/Header/indes'
import React from 'react'

const SignupPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header left={<BackButton />} />
      <main className="flex-grow p-4">
        {/* <form>
        <InputField label="닉네임" placeholder="닉네임을 입력해주세요" />
        <InputField label="연락처" placeholder="연락처를 입력해주세요" type="tel" />
        <InputField label="주소" placeholder="도로명, 지번 또는 건물명으로 검색" />
        <InputField label="상세 주소" placeholder="상세 주소를 입력해주세요" />
      </form> */}
      </main>

      <Footer
        text="완료"
        onClick={() => {
          console.log('')
        }}
      />
    </div>
  )
}

export default SignupPage
