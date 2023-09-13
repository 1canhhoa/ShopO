import axios from "axios";
// load user
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });
    const { data } = await axios.get(`/api/v1/profile`, { withCredentials: true });
    dispatch({
      type: "LoadUserSuccess",
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "LoadUserFail",
      payload: error.response.data,
    });
  }
};