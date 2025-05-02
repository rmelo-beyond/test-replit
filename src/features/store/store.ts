import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './languageSlice'
import { api } from '../api/api'

export const store = configureStore({
  reducer: {
    language: languageReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch