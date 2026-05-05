import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account: null,
  user: null,
  isLoggedIn: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register(state, action) {
      const { name, email, password } = action.payload
      state.account = { name, email, password }
      state.user = { name, email }
      state.isLoggedIn = true
      state.error = null
    },
    login(state, action) {
      const { email, password } = action.payload
      if (state.account?.email === email && state.account?.password === password) {
        state.user = { name: state.account.name, email: state.account.email }
        state.isLoggedIn = true
        state.error = null
      } else {
        state.error = 'Email yoki parol noto‘g‘ri'
      }
    },
    logout(state) {
      state.user = null
      state.isLoggedIn = false
      state.error = null
    },
  },
})

export const { register, login, logout } = authSlice.actions
export default authSlice.reducer
