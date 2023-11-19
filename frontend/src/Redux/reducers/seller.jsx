import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticatedSeller: false,
  loadingSeller: true,
};

export const sellerReducer = createReducer(initialState, {
  // LoadSellerRequest: (state) => {
  //   state.loadingSeller = true;
  // },
  LoadSellerSuccess: (state, action) => {
    state.loadingSeller = false;
    state.isAuthenticatedSeller = true;
    state.seller = action.payload;
  },
  LoadSellerFail: (state, action) => {
    state.loadingSeller = false;
    state.isAuthenticatedSeller = false;
    state.error = action.payload;
  },
  clearError: (state) => {
    state.error = null
  }
})
export default sellerReducer;