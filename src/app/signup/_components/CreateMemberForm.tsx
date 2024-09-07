import React from 'react'
import { Form } from '@/components/ui/form'
import InputFormItem from '@/components/shared/InputFormItem'
import { UseFormReturn } from 'react-hook-form'
import { CreateMemberFormDataType } from '@/features/member/hooks/useCreateMemberForm'

interface CreateMemberFormProps {
  form: UseFormReturn<CreateMemberFormDataType>
}

const CreateMemberForm = ({ form }: CreateMemberFormProps) => {
  return (
    <>
      <Form {...form}>
        <form className="flex w-full flex-col gap-4">
          <InputFormItem
            control={form.control}
            name="nickName"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            required
          />
          <InputFormItem
            name="contact"
            control={form.control}
            label="연락처"
            placeholder="연락처를 입력해주세요"
            required
          />
          <InputFormItem
            name="address"
            control={form.control}
            label="주소"
            placeholder="도로명, 지번 또는 건물명으로 검색"
            required
          />
          <InputFormItem
            name="detailAddress"
            control={form.control}
            label="상세 주소"
            placeholder="상세 주소를 입력해주세요"
          />
        </form>
      </Form>
    </>
  )
}

export default CreateMemberForm
