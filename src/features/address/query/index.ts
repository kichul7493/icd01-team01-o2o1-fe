import { useQuery } from '@tanstack/react-query'
import { getAddresses } from '../api'

export const useGetMainAddress = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['main-address'],
    queryFn: async () => {
      const res = await getAddresses()
      return res.response.addresses.find((address) => address.addressStatus === 'main')
    },
  })

  return { data, isLoading }
}
