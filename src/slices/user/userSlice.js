import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    _id:"",
    phoneNumber:"",
    username: "",
    avatar:"",
    // about:"",
    token:"",
    // password:"",
  },
  reducers: {

    changeUsername: (state, action) => {
      return {
        ...state,
        username: action.payload,
      }
    },

    changePhoneNumber: (state, action) => {
      return {
        ...state,
        phoneNumber: action.payload,
      }
    },

    changeAvatar: (state, action) => {
      return {
        ...state,
        avatar: action.payload,
      }
    },

    // changePassword: (state, action) => {
    //   return {
    //     ...state,
    //     password: action.payload,
    //   }
    // },

    // changeToken: (state, action) => {
    //   return {
    //     ...state,
    //     token: action.payload,
    //   }
    // },

  },
})

export default userSlice.reducer
export const { changeUsername,changePassword,changeAvatar,changeAbout,changePhoneNumber } = userSlice.actions