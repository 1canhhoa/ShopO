import axios from "axios";

// create product
export const ActionCreateProduct = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: 'productCreateRequest',
    })
    const config = { headers: { "Content-Type": "multipart/form-data" } }
    const { data } = await axios.post('/api/v1/create-product', newForm, config)
    dispatch({
      type: 'productCreateSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'productCreateFail',
      payload: error.response.data
    })
  }
}
export const AcionProductClearState = () => async (dispatch) => {
  dispatch({
    type: "productClearState",
  })
}

// get all product by shop id
export const ActionGetAllProductbyShopId = (shopId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-product/${shopId}`)
    dispatch({
      type: 'getAllProductbyShopIdSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllProductbyShopIdFail',
      payload: error.response.data
    })
  }
}
// get all product by shop id
export const ActionGetAllProductbyShopName = (shopName) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-product-by-name/${shopName}`)
    dispatch({
      type: 'getAllProductbyShopNameSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllProductbyShopNameFail',
      payload: error.response.data
    })
  }
}
// get all product
export const ActionGetAllProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-product`)
    dispatch({
      type: 'getAllProductSuccess',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllProductFail',
      payload: error.response.data
    })
  }
}
// Delete product

export const ActionDeleteProduct = (productId) => async (dispatch) => {
  try {
    console.log('productId', productId);
    const { data } = await axios.delete(`/api/v1/delete-product/${productId}`)
    dispatch({
      type: "deleteProductSuccess",
      payload: data.message
    })
  } catch (error) {
    dispatch({
      type: "deleteProductFail",
      payload: error.response.data.message
    })
  }
}
