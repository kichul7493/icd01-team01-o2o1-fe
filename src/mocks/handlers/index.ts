import { orderHandlers } from './order'
import { reviewHandlers } from './review'

export const handlers = [...reviewHandlers, ...orderHandlers]
