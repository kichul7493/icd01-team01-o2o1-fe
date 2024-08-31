import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Control } from 'react-hook-form'

type InputFormItemProps = {
  control: Control<any, any>
  name: string
  label?: string | React.ReactNode
  placeholder: string
  required?: boolean
}

const InputFormItem = ({ required = false, ...props }: InputFormItemProps) => {
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
                placeholder={props.placeholder}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}

export default InputFormItem
