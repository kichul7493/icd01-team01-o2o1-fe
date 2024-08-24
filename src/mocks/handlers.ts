import { HttpResponse, http } from 'msw'

const API_URL = process.env.REACT_APP_API_URL

const baseURL = `${API_URL}/api/v1`

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
