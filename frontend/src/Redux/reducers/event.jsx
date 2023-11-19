import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
};
// create product
const eventReducer = createReducer(initialState, {
  eventCreateSuccess: (state, action) => {
    state.isLoading = false;
    state.event = action.payload;
    state.success = true;
  },
  eventCreateFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
    state.success = false;
  },
  eventClearState: (state) => {
    state.isLoading = false;
    state.error = null;
    state.success = false;
    state.event = null;
  },
  // get all event by shop id
  getAllEventByShopIdSuccess: (state, action) => {
    state.isLoading = false,
      state.events = action.payload
  },
  getAllEventByShopIdFail: (state, action) => {
    state.isLoading = false,
      state.error = action.payload
  },
  // get all event 
  getAllEventSuccess: (state, action) => {
    state.isLoading = false,
      state.allEvent = action.payload
  },
  getAllEventFail: (state, action) => {
    state.isLoading = false,
      state.error = action.payload
  },
  // delete event
  deleteEventSuccess: (state, action) => {
    state.isLoading = false
    state.message = action.payload
  },
  deleteEventFail: (state, action) => {
    state.isLoading = false
    state.error = action.payload
  },
  // delete product
})
export default eventReducer
