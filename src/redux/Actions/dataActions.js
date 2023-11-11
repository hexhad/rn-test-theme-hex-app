import {createAsyncThunk} from '@reduxjs/toolkit';
import {delayFor} from '@utils/shortHands';
import {dummyData} from '@constants/dummyData';

export const getData = createAsyncThunk(
  'data/getData',
  async (value, {getState, dispatch}) => {
    await delayFor();
    return dummyData;
  },
);
