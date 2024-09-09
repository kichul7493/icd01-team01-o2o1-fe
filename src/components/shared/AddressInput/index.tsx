'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { Control } from 'react-hook-form'

interface AddressInputProps {
  control: Control<any, any>
  name: string
  label?: string | React.ReactNode
  required?: boolean
}

const AddressInput = ({ required = false, ...props }: AddressInputProps) => {
  const [address, setAddress] = useState('')

  return (
    <FormField
      control={props.control}
      name={props.name}
      rules={{ required: required }}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>
              <div className="text-base">
                {props.label}
                {required && <span className="text-red-500"> *</span>}
              </div>
            </FormLabel>
            <FormControl>
              <Input
                className="h-12 border-black bg-gray-50 pl-2"
                placeholder={'🔎 도로명, 지번 또는 건물명으로 검색'}
                {...field}
                readOnly
                onClick={() => {}}
                value={address}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default AddressInput
