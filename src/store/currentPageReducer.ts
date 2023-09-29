import { createSlice } from '@reduxjs/toolkit';

const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState: 1,
  reducers: {
    nextPage: (state) => state + 1,
    previousPage: (state) => state - 1,
  },
});

export const { nextPage, previousPage } = currentPageSlice.actions;
export default currentPageSlice.reducer;
