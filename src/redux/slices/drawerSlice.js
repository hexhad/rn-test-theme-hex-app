import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  value: true,
}

const dummySlice = createSlice({
  name:'drawer',
  initialState,
  reducers:{
    toggleState: (state,{payload}) => ({
      ...state,
      value : !state.value
    }),
  },
})


export default dummySlice.reducer;
export const {toggleState} = dummySlice.actions;