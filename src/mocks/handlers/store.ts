import { useQuery } from '@tanstack/react-query'

export default function useStoreData() {
  const useStoreQuery = () =>
    useQuery({
      queryKey: ['restaurants'],
      queryFn: async () =>
        await fetch(`/api/store`, {
          method: 'GET',
        }).then((res) => res.json()),
    })
  return {
    useStoreQuery,
  }
}
