import {createSlice} from '@reduxjs/toolkit';
import {getData} from '@rtk/Actions/dataActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.pending, state => {
      state.loading = true;
      state.data = [];
      state.error = null;
    });
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default dataSlice.reducer;
export const {toggleState} = dataSlice.actions;
