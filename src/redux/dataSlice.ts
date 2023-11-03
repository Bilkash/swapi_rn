import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface DataState {
  data: any[] | [];
  page: number;
}

const initialState: DataState = {
  data: [],
  page: 1,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
    },
  },
});

export const { getData, incrementPage } = dataSlice.actions;

export default dataSlice.reducer;
