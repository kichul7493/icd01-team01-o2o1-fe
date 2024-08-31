import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const createMemberFormSchema = z.object({
  nickName: z
    .string()
    .min(2, '닉네임을 2자 이상 입력해주세요')
    .max(20, '닉네임은 20자 이하로 입력해주세요'),
  contact: z.string().regex(/^[0-9]{10,11}$/, '올바른 전화번호를 입력해주세요'),
  address: z.string().min(1, '주소를 입력해주세요'),
  detailAddress: z.string().optional(),
})

export type CreateMemberFormDataType = z.infer<typeof createMemberFormSchema>

// useSignupForm 훅 정의
export const useSignUpForm = () => {
  const form = useForm<CreateMemberFormDataType>({
    resolver: zodResolver(createMemberFormSchema),
    mode: 'onChange',
    defaultValues: {
      nickName: '',
      contact: '',
      address: '',
      detailAddress: '',
    },
  })

  const handleSubmit = (data: CreateMemberFormDataType) => {
    // TODO: 회원가입 로직 구현
    console.log('회원가입 데이터:', data)
  }

  return {
    form,
    handleSubmit: form.handleSubmit(handleSubmit),
    // isSubmitting: form.formState.isSubmitting,
  }
}
