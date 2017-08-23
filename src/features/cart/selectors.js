export const getQuantity = (state, productId) =>
  state.cart.quantityById[productId] || 0

export const getAddedIds = state => state.cart.addedIds