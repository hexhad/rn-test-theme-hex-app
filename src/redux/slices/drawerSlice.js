import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleState: (state, {payload}) => ({
      ...state,
      value: !state.value,
    }),
  },
});

export default drawerSlice.reducer;
export const {toggleState} = drawerSlice.actions;
