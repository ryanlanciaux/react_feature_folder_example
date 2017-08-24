import { combineReducers } from 'redux'
import { reducer as cart } from '../features/cart'
import { reducer as products } from '../features/product'

export default combineReducers({
  cart,
  products
})

