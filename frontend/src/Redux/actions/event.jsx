import axios from "axios";

// create product
export const ActionCreateEvent = (newForm) => async (dispatch) => {
  try {
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    const { data } = await axios.post('/api/v1/create-event', newForm, config)
    dispatch({
      type: 'eventCreateSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'eventCreateFail',
      payload: error.response.data
    })
  }
}
export const ActionEventClearState = () => async (dispatch) => {
  dispatch({
    type: "eventClearState",
  })
}
// get all event by shop Id
export const ActionGetAllEventByShopId = (shopId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-event/${shopId}`)
    dispatch({
      type: 'getAllEventByShopIdSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllEventByShopIdFail',
      payload: error.response.data
    })
  }
}
// get all event
export const ActionGetAllEvent = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-events`)
    dispatch({
      type: 'getAllEventSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllEventFail',
      payload: error.response.data
    })
  }
}
// Delete product

export const ActionDeleteEvent = (eventId) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/v1/delete-event/${eventId}`)
    dispatch({
      type: "deleteEventSuccess",
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: "deleteEventFail",
      payload: error.response.data.message
    })
  }
}
