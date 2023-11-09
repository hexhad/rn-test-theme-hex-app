import { createSelector } from "@reduxjs/toolkit";

export const getValue = (state) => state.dummy.value

export const processedValue = createSelector(
    (state) => state.dummy,
    ({loading,value}) => {
        return loading ? 'Loading' : value + 100
    }
)