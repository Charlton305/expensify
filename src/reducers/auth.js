import { createSlice } from "@reduxjs/toolkit"

const initialState = { uid: "" }

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.uid = action.payload
    },
    logout(state) {
      state.uid = ""
    }
  },
})

export const { login, logout } = authReducer.actions
export default authReducer.reducer