import { createReducer } from "@reduxjs/toolkit";


const initial = {
  allOrders: []
}
const orderReducer = createReducer(initial, {
  getAllOrdersByUser: (state, action) => {
    state.allOrders = action.payload.allOrders
  },
  CreateOrder: (state, action) => {
    state.allOrders = action.payload.allOrders
    state.messageCreateOrder = action.payload.message
    state.success = action.payload.success
    state.rs = action.payload.rs
    state.rs1 = action.payload.rs1
  },
  CreateOrderOrDeleteIncartsFail: (state, action) => {
    state.errorCreateOrder = action.payload
  },
  animateWhenCheckout: (state) => {
    state.type = 'checkout'
  },
  orderClearState: (state) => {
    state.messageCreateOrder = null
    state.errorCreateOrder = null
  }
})
export default orderReducer