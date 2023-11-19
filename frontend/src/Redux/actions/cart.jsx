

import axios from "axios";

export const ActionAddTocart = (dataCart) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`/api/v1/add-to-cart`, dataCart)
    console.log('data', data);
    dispatch({
      type: "addToCart",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }
};
export const ActionGetAllCart = (emailUser) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-cart-by-email/${emailUser}`);
    dispatch({
      type: "addToCart",
      payload: data,
    });
    // localStorage.setItem("lengthCart", JSON.stringify(getState().cart.carts.length));
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }
};
export const ActionRemoveFromCart = (dataCart) => async (dispatch) => {
  try {
    // console.log("productId, emailShop", productId, emailShop);
    const { data } = await axios.post('/api/v1/delete-cart', dataCart)
    console.log("data", data);
    dispatch({
      type: "addToCart",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }

};
export const ActionUpdateIncreaseQuanti = (dataCart) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/update-increase-quanti', dataCart)
    dispatch({
      type: "addToCart",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }
};
export const ActionUpdateDecreaseQuanti = (dataCart) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/update-decrease-quanti', dataCart)
    dispatch({
      type: "addToCart",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }
};
export const ActionConfirmVariation = (dataConFirm) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/confirm-variation', dataConFirm)
    dispatch({
      type: "addToCart",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data,
    });
  }
};
export const ActionClearCart = () => async (dispatch) => {
  dispatch({
    type: "clearCart",
  });

};
export const ActionAllCheckedProduct = (data) => async (dispatch) => {
  dispatch({
    type: 'allCheckedProduct',
    payload: data
  })
}
export const ActionCheckedProducts = (data1) => async (dispatch, getState) => {
  dispatch({
    type: "checkedProduct",
    payload: data1,
  });
  localStorage.setItem("checkedProductsId", JSON.stringify(getState().cart.checkedProductsId));
  return data1;

}