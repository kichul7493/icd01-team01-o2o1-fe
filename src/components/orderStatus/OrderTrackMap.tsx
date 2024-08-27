import { Address, Store } from '@/features/order-status/types'
import { CircleUser, Store as StoreIcon } from 'lucide-react'
import React from 'react'
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk'

interface OrderTrackMapProps {
  storeAdress: Address
  userAddress: Address
}

const OrderTrackMap = ({ storeAdress, userAddress }: OrderTrackMapProps) => {
  return (
    <Map
      center={{
        lat: storeAdress.latitude,
        lng: storeAdress.longitude,
      }}
      className="h-full w-full"
      level={4}
      zoomable={false}
    >
      <CustomOverlayMap
        position={{
          lat: storeAdress.latitude,
          lng: storeAdress.longitude,
        }}
      >
        <div className="rounded-full bg-main p-2">
          <StoreIcon width={24} height={24} strokeWidth={1.25} color="white" />
        </div>
      </CustomOverlayMap>
      <CustomOverlayMap
        position={{
          lat: userAddress.latitude,
          lng: userAddress.longitude,
        }}
      >
        <div className="rounded-full bg-main p-2">
          <CircleUser width={24} height={24} strokeWidth={1.25} color="white" />
        </div>
      </CustomOverlayMap>
    </Map>
  )
}
export default OrderTrackMap
