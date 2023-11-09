import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { delayFor } from "@utils/shortHands";


const initialState = {
  value: 0,
  loading: false
}

const dummySlice = createSlice({
  name:'dummy',
  initialState,
  reducers:{
    increment: (state) => {
      state.value += 1;
    },
    incrementByValue: (state,action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(dummyAsync.pending,(state)=>{
      state.loading = true;
    })
    builder.addCase(dummyAsync.fulfilled,(state,action)=>{
      state.loading = action.payload;
    })
    builder.addCase(dummyAsync.rejected,(state)=>{
      state.loading = false;
    })
  }
})

export const dummyAsync = createAsyncThunk(
  'main/asyncMain',
  async (value,{getState,dispatch}) => {
    await delayFor()
    dispatch(incrementByValue(20));
    return value;
  }
)

export default dummySlice.reducer;
export const {increment,decrement,incrementByValue} = dummySlice.actions;