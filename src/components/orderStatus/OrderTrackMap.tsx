import React from 'react'
import { Map } from 'react-kakao-maps-sdk'

const OrderTrackMap = () => {
  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      className="h-full w-full"
    ></Map>
  )
}
export default OrderTrackMap
