import { useQuery } from '@tanstack/react-query'
import { getMemberAddress } from '../api'

const useGetMemberAddress = () => {
  const { data } = useQuery({
    queryKey: ['address'],
    queryFn: getMemberAddress,
  })

  return { data }
}

export default useGetMemberAddress
