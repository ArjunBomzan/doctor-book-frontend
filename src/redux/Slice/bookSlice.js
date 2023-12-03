import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setReduxbook: (state, action) => {
      state.value = action.payload
      console.log("first")
    }
    
  },
})

// Action creators are generated for each case reducer function
export const  {setReduxbook} = bookSlice.actions

export default bookSlice.reducer