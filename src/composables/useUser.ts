import { useQuery } from '@tanstack/vue-query'
import { userService } from '../service/user'

export function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const data = await userService.getUser()
      return data
    }
  })
}