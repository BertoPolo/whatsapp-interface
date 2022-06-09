import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/user/userSlice'
import chatReducer from '../slices/chat/chatSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
   
  },
})
