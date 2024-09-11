import { useQuery } from '@tanstack/react-query'
import { useParams, useRouter } from 'next/navigation'
import { getStoreDetailInfo } from '../api'

export const useGetStoreDetailInfo = () => {
  const params = useParams<{
    id: string
  }>()

  const { data, isLoading } = useQuery({
    queryKey: ['store', params.id],
    queryFn: async () => getStoreDetailInfo(params.id),
  })

  return { data, isLoading }
}
