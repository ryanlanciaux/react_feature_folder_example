import * as fromCart from './reducer'
import { getProduct } from '../product/selectors'

export const getQuantity = (state, productId) =>
  state.cart.quantityById[productId] || 0

export const getAddedIds = state => state.cart.addedIds

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state => console.log('STATE', state) ||
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
