import axios from "axios";
// load user
export const loadUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/profile`, { withCredentials: true })
    dispatch({
      type: "LoadUserSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data,
    });
  }
};
export const loadSeller = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/profile-seller`, { withCredentials: true })
    dispatch({
      type: "LoadSellerSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "LoadSellerFail",
      payload: error.response.data,
    });
  }
};