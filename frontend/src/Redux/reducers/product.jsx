import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
// create product
const productReducer = createReducer(initialState, {
  productCreateRequest: (state) => {
    state.isLoading = true;
  },
  productCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.product = action.payload;
    state.success = true;
  },
  productCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
  productClearState: (state) => {
    state.isLoading = false;
    state.error = null;
    state.success = false;
    state.product = null;
  },
  // get all product by shop id
  getAllProductbyShopIdSuccess: (state, action) => {
    state.isLoading = false,
      state.products = action.payload
  },
  getAllProductbyShopIdFail: (state, action) => {
    state.isLoading = false,
      state.error = action.payload
  },
  // get all product by shop Name
  getAllProductbyShopNameSuccess: (state, action) => {
    state.isLoading = false,
      state.products = action.payload.products
    state.shop = action.payload.shop
  },
  getAllProductbyShopNameFail: (state, action) => {
    state.isLoading = false,
      state.error = action.payload
  },
  // get all product
  getAllProductSuccess: (state, action) => {
    state.isLoading = false,
      state.allProduct = action.payload
  },
  getAllProductFail: (state, action) => {
    state.isLoading = false,
      state.error = action.payload
  },

  // delete product
  deleteProductSuccess: (state, action) => {
    state.isLoading = false
    state.message = action.payload
  },
  deleteProductFail: (state, action) => {
    state.isLoading = false
    state.error = action.payload
  },
  // delete product
})
export default productReducer
