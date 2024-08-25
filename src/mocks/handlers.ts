import { baseURL } from '@/constants/api'
import { HttpResponse, http } from 'msw'

export const handlers = [
  http.get(baseURL, () => {
    return HttpResponse.json({
      data: {
        name: 'handongryong',
        age: 25,
      },
    })
  }),
]
