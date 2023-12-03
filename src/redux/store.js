import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./Slice/userSlice"
import userSlice from './Slice/userSlice'
import bookSlice from './Slice/bookSlice'
export const store = configureStore({
    reducer: {
        user: userSlice,
        book:bookSlice

    },
})