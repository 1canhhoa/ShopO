import { createReducer } from "@reduxjs/toolkit";
const initialState = {

}
const chatReducer = createReducer(initialState, {
  createConversation: (state, action) => {
    state.conversation = action.payload.conversation
    state.conversations = action.payload.conversations
    state.success = action.payload.message
  },
  createConversationFail: (state, action) => {
    state.error = action.payload
  },
  getAllConversation: (state, action) => {
    state.conversations = action.payload.conversations
  },
  getAllConversationFail: (state, action) => {
    state.error = action.payload
  },
  updateConversations: (state, action) => {
    state.conversations = action.payload
  },
  updateLastMessage: (state, action) => {
    state.conversation = action.payload.conversation
    state.conversations = action.payload.conversations
  },
  updateLastMessageFail: (state, action) => {
    state.error = action.payload
  },
  clearMassageChat: (state) => {
    state.success = null
    state.error = null
  },
  open: (state, action) => {
    state.chatOpen = action.payload
  }
})
export default chatReducer