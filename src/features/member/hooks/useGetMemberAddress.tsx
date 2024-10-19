import { useQuery } from '@tanstack/react-query'
import { getMemberAddress } from '../api'

const useGetMemberAddress = () => {
  const { data, isError, refetch } = useQuery({
    queryKey: ['address'],
    queryFn: getMemberAddress,
  })

  return { data, isError, refetch }
}

export default useGetMemberAddress
