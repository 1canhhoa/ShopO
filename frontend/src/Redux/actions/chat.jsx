import axios from "axios";
export const ActionCreateConversation = (data1) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/v1/create-new-conversation', data1)
    console.log('data', data);
    dispatch({
      type: 'createConversation',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'createConversationFail',
      payload: error.response.data
    })
  }
}
export const ActionGetAllConversationByUser = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-conversation-user/${userId}`)
    console.log('data', data);
    dispatch({
      type: 'getAllConversation',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllConversationFail',
      payload: error.response.data
    })
  }
}
export const ActionGetAllConversationBySeller = (sellerId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/v1/get-all-conversation-seller/${sellerId}`)
    console.log('data', data);
    dispatch({
      type: 'getAllConversation',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'getAllConversationFail',
      payload: error.response.data
    })
  }
}
export const ActionUpdateLastMessage = (data1) => async (dispatch) => {
  try {
    const conversationId = data1.conversationId
    const { data } = await axios.put(`/api/v1/update-last-message/${conversationId}`, data1)
    dispatch({
      type: 'updateLastMessage',
      payload: data
    })
  } catch (error) {
    dispatch({
      type: 'updateLastMessageFail',
      payload: error.response.data
    })
  }
}