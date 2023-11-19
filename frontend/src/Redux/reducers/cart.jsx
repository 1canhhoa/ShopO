import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  lengthCart: localStorage.getItem("lengthCart")
    ? JSON.parse(localStorage.getItem("lengthCart"))
    : [],
  productsInCart: [],
  checkedProductsId: localStorage.getItem("checkedProductsId")
    ? JSON.parse(localStorage.getItem("checkedProductsId"))
    : [],
}
const cartReducer = createReducer(initialState, {
  addToCart: (state, action) => {
    state.loadingCart = false
    state.message = action.payload.message
    state.productsInCart = action.payload.productsInCart
    state.allCarts = action.payload.allCarts
    state.newCard = action.payload.newCard
  },
  addToCartFail: (state, action) => {
    state.loadingCart = false
    state.error = action.payload
  },
  checkedProduct: (state, action) => {
    state.checkedProductsId = action.payload
  },
  DeleteIncartsAfterCheckout: (state, action) => {
    state.allCarts = action.payload.allCarts
  },
  clearCart: (state) => {
    state.error = null
    state.message = null
  }
});
export default cartReducer
