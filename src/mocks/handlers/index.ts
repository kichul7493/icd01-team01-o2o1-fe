import { authHandlers } from './auth'
import { memberHandlers } from './member'
import { orderHandlers } from './order'
import { reviewHandlers } from './review'
import { storeHandlers } from './store'

export const handlers = [
  ...reviewHandlers,
  ...orderHandlers,
  ...authHandlers,
  ...memberHandlers,
  ...storeHandlers,
]
