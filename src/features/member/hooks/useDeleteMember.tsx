import { useMutation } from '@tanstack/react-query'
import { deleteMember } from '../api'

const useDeleteMember = () => {
  const { isPending, isError, mutate } = useMutation({
    mutationKey: ['deleteMember'],
    mutationFn: deleteMember,
  })

  return {
    isPending,
    isError,
    deleteMember: mutate,
  }
}

export default useDeleteMember
