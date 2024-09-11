'use client'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Address, DaumAddress } from '@/features/member/types'
import { getAddressCoords } from '@/lib/utils'
import React, { useState } from 'react'
import { Control } from 'react-hook-form'

interface AddressInputProps {
  control: Control<any, any>
  name: string
  label?: string | React.ReactNode
  required?: boolean
  setAddress: (address: Address) => void
}

const AddressInput = ({ required = false, ...props }: AddressInputProps) => {
  const [address, setAddress] = useState('')
  const onComplete = async (data: DaumAddress) => {
    let fullAddress = data.address
    let extraAddress = ''
    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    setAddress(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    const coords = (await getAddressCoords(fullAddress)) as { latitude: number; longitude: number }
    props.setAddress({
      address: fullAddress,
      addressDetail: '',
      latitude: coords.latitude,
      longitude: coords.longitude,
      zipCode: data.zonecode,
    })
  }

  const handleClick = () => {
    // 위치가 left 안먹는 이유를 모르겠음...
    new window.daum.Postcode({
      oncomplete: onComplete,
      width: 400,
      height: 500,
    }).open({})
  }

  return (
    <>
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
                  onClick={handleClick}
                  value={address}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )
        }}
      />
    </>
  )
}

export default AddressInput
