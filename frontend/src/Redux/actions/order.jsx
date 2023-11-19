import axios from "axios";

export const ActionCreateOrderAndDeleteIncarts = (data1) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/create-order', data1)
    console.log('data.allCarts', data.allCarts);
    dispatch({
      type: 'CreateOrder',
      payload: data
    })
    dispatch({
      type: 'DeleteIncartsAfterCheckout',
      payload: data
    })
    console.log('remove item');
    localStorage.removeItem('checkedProductsId');
  } catch (error) {
    dispatch({
      type: 'CreateOrderOrDeleteIncartsFail',
      payload: error.response.data
    })
  }
}
export const ActionGetAllOrderByUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/v1/get-all-orders-by-user')
    console.log('data', data);
    dispatch({
      type: 'getAllOrdersByUser',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllOrdersByUserFail',
      payload: error.response.data
    })
  }
}
export const ActionOrderClearState = () => async (dispatch) => {
  dispatch({
    type: "orderClearState",
  })
}
export const ActionAnimateWhenCheckout = () => async (dispatch) => {
  dispatch({
    type: "animateWhenCheckout",
  })
}
export const ActionUpdateWhenCallApiByPaypal = (data) => async (dispatch) => {
  dispatch({
    type: 'CreateOrder',
    payload: data
  })
}