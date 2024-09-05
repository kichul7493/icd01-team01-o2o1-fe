import { StoreIcon, CircleUser, Car } from 'lucide-react'
import React from 'react'
import { CustomOverlayMap } from 'react-kakao-maps-sdk'

interface OrderTrackItemProps {
  lat: number
  lng: number
  type: 'store' | 'user' | 'delivery'
}

const OrderTrackItem = ({ lat, lng, type }: OrderTrackItemProps) => {
  let icon = null

  switch (type) {
    case 'store':
      icon = (
        <div className="rounded-full bg-main p-2">
          <StoreIcon width={24} height={24} strokeWidth={1.25} color="white" />
        </div>
      )
      break
    case 'user':
      icon = (
        <div className="rounded-full bg-main p-2">
          <CircleUser width={24} height={24} strokeWidth={1.25} color="white" />
        </div>
      )
      break
    case 'delivery':
      icon = (
        <div className="rounded-full bg-yellow-300 p-2">
          <Car width={24} height={24} strokeWidth={1.25} color="white" />
        </div>
      )
      break
  }

  return (
    <CustomOverlayMap
      position={{
        lat,
        lng,
      }}
    >
      {icon}
    </CustomOverlayMap>
  )
}

export default OrderTrackItem
