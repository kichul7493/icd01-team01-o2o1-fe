'use client'
import BackButton from '@/components/shared/BackButton'
import Header from '@/components/shared/Header'
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Separator } from '@/components/ui/separator'
import { Address, DaumAddress } from '@/features/member/types'
import { getAddressCoords } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import Footer from '@/components/shared/Footer'

const AddressSearchPage = () => {
  const [address, setAddress] = useState<Address | null>()

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
    const coords = (await getAddressCoords(fullAddress)) as { latitude: number; longitude: number }
    setAddress({
      address: fullAddress,
      addressDetail: '',
      latitude: coords.latitude,
      longitude: coords.longitude,
      zipCode: data.zonecode,
    })
  }

  const handleClick = () => {
    setAddress(null)
    // 위치가 left 안먹는 이유를 모르겠음...
    new window.daum.Postcode({
      oncomplete: onComplete,
      width: 400,
      height: 500,
    }).open({})
  }

  return (
    <div>
      <Header left={<BackButton />} center="주소 검색" />
      <div className="p-4 text-gray-400" onClick={handleClick}>
        <MagnifyingGlassIcon className="mr-1 inline size-5 text-black" />
        {!address ? (
          '도로명, 건물명 또는 지번으로 검색'
        ) : (
          <span className="text-black">{address.address}</span>
        )}
      </div>
      <Separator className="h-2" />

      {address && (
        <>
          <div className="p-6">
            <Input
              className="static rounded-none border-0 border-b-2 text-xl"
              placeholder="상세 주소를 입력해주세요"
              onChange={(e) => setAddress({ ...address, addressDetail: e.target.value })}
            />
          </div>
          <Footer text="완료" onClick={() => console.log(address)} />
        </>
      )}
    </div>
  )
}

export default AddressSearchPage
