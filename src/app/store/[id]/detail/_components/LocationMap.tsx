'use client'

import { Map } from 'react-kakao-maps-sdk'
import { useGetStoreDetailInfo } from '@/features/store/hooks/useGetStoreDetailInfo'
import OrderTrackItem from '@/app/order-status/[orderId]/_components/OrderTrackItem'
import { Skeleton } from '@/components/ui/skeleton'

const LocationMap = () => {
  const { data, isLoading } = useGetStoreDetailInfo()

  // 기본 좌표를 설정 (예: 서울 시청)
  const defaultCenter = { lat: 37.5665, lng: 126.978 }

  const mapCenter = {
    lat: data?.latitude ?? defaultCenter.lat,
    lng: data?.longitude ?? defaultCenter.lng,
  }

  return isLoading === true ? (
    <Skeleton className="h-[240px] w-full bg-gray-200" />
  ) : (
    <Map center={mapCenter} className="relative h-[240px] w-full bg-gray-200" level={4}>
      <OrderTrackItem lat={mapCenter.lat} lng={mapCenter.lng} type="store" />
    </Map>
  )
}

export default LocationMap
