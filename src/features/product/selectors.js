export const getProduct = (state, id) => ((state, id) => { debugger; return null;})(state, id) ||
  state.products.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
