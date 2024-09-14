import { addressHandlers } from './address'
import { authHandlers } from './auth'
import { memberHandlers } from './member'
import { orderHandlers } from './order'
import { reviewHandlers } from './review'
import { storeDetailHandlers } from './storeDetail'
import { addressHandlers } from './address'

export const handlers = [
  ...reviewHandlers,
  ...orderHandlers,
  ...authHandlers,
  ...memberHandlers,
  ...addressHandlers,
  ...storeDetailHandlers,
  ...addressHandlers,
]
