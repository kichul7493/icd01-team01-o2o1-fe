import React from 'react'
// import { Star, X } from 'lucide-react'
import { X } from 'lucide-react'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { Separator } from '@/components/ui/separator'
import { useAddressList, useDeleteAddress, useUpdateMainAddress } from '@/features/address/query'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import ExceptionScreen from '@/components/shared/ExceptionScreen/ExceptionScreen'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

type AddressData = {
  addressId: number
  latitude: number
  longitude: number
  address: string
  addressDetail: string
  zipCode: string
  addressStatus: string
}

const AddressList = () => {
  const { data, isError, isLoading, refetch } = useAddressList()

  if (isError) {
    return (
      <ExceptionScreen refetch={refetch} message="주소 목록을 불러오는 중에 문제가 발생했습니다." />
    )
  }

  if (isLoading) {
    return <LoadingSpinner isFullScreen />
  }

  return (
    <ul className="p-2">
      {data &&
        data.map((address: AddressData) => (
          <AddressListItem {...address} key={address.addressId} />
        ))}
    </ul>
  )
}

export default AddressList

const AddressListItem = ({ ...props }: AddressData) => {
  const { mutate: deleteAddress } = useDeleteAddress()
  const { mutate: updateMainAddress } = useUpdateMainAddress()
  const queryClient = useQueryClient()
  const router = useRouter()

  const handleChangeMainAddress = () => {
    if (props.addressStatus === 'main') return

    queryClient.invalidateQueries({
      queryKey: ['address'],
    })

    queryClient.invalidateQueries({
      queryKey: ['storeList', '', null],
    })
    updateMainAddress(props.addressId)
  }

  return (
    <>
      <li key={props.addressId} className="flex h-12 items-center justify-between bg-white p-3">
        <button className="flex items-center space-x-3" onClick={handleChangeMainAddress}>
          <StarFilledIcon
            className={`h-5 w-5 ${
              props.addressStatus == 'main' ? 'text-yellow-400' : 'text-gray-400'
            }`}
          />
          <span className="text-gray-700">{props.address}</span>
        </button>
        {props.addressStatus !== 'main' && (
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={() => deleteAddress(props.addressId)}
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </li>
      <Separator />
    </>
  )
}
