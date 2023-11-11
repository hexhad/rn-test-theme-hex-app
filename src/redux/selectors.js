import {createSelector} from '@reduxjs/toolkit';

export const getValue = state => state.drawer.value;

export const processedValue = createSelector(
  state => state.dummy,
  ({loading, value}) => {
    return loading ? 'Loading' : value + 100;
  },
);
export const getCategories = createSelector(
  state => state.data.data,
  data => {
    return data?.map(e => e.category);
  },
);
