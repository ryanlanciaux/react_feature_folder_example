import React from 'react'
import ProductsContainer from './features/product/components/ProductsContainer'
import CartContainer from './features/cart/components/CartContainer'

const App = () => (
  <div>
    <h2>Shopping Cart Example</h2>
    <hr/>
    <ProductsContainer />
    <hr/>
    <CartContainer />
  </div>
)

export default App
