import { combineReducers } from 'redux'
import cart, * as fromCart from './features/cart/reducer'
import products, * as fromProducts from './features/product/reducer'

export default combineReducers({
  cart,
  products
})

