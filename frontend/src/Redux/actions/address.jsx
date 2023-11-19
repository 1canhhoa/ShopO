
import axios from "axios"

export const ActioncreateAddress = (dataAddress) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/create-address', dataAddress)
    dispatch({
      type: 'createAddressSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createAddressFail',
      payload: error.response.data
    })
  }
}
export const ActionGetAllAddress = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-address/${userId}`)
    dispatch({
      type: 'createAddressSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createAddressFail',
      payload: error.response.data
    })
  }
}
export const ActionSetDefault = (userId, addressId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/v1/set-default-address`, { userId, addressId })
    dispatch({
      type: 'createAddressSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createAddressFail',
      payload: error.response.data
    })
  }
}
export const ActionDeleteAddress = (id, userId) => async (dispatch) => {
  try {
    const { data } = await axios.post(`/api/v1/delete-address`, { id, userId })
    dispatch({
      type: 'createAddressSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createAddressFail',
      payload: error.response.data
    })
  }
}

export const ActionClear = () => async (dispatch) => {
  dispatch({
    type: 'clearAddress',
  })
}