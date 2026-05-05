import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'

const STORAGE_KEY = 'animePlatformState'

const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return undefined
    return JSON.parse(raw)
  } catch {
    return undefined
  }
}

const saveState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ auth: state.auth }))
  } catch {
    // ignore write errors
  }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: loadState(),
})

store.subscribe(() => saveState(store.getState()))

export default store
