import { createReducer } from "@reduxjs/toolkit";

const initialState = {

}
const addressReducer = createReducer(initialState, {
  createAddressSuccess: (state, action) => {
    state.allAddresses = action.payload.allAddress
    state.message = action.payload.message
    state.loadingAddress = false
  },
  createAddressFail: (state, action) => {
    state.allAddresses = action.payload.allAddress
    state.error = action.payload
    state.loadingAddress = false
  },
  clearAddress: (state) => {
    state.error = null
    state.message = null
  }

});
export default addressReducer