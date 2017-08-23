import { combineReducers } from 'redux'
import cart from '../features/cart/reducer'
import products from '../features/product/reducer'

export default combineReducers({
  cart,
  products
})

