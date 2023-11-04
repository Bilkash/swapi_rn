import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StarWarsApiResponse } from '../types';

export interface DataState {
  data: StarWarsApiResponse | null;
  page: number;
  loading: boolean;
}

const initialState: DataState = {
  data: null,
  page: 1,
  loading: false,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    startFetchingData: state => {
      state.loading = true;
    },
    stopFetchingData: state => {
      state.loading = false;
    },
    getData: (state, action: PayloadAction<StarWarsApiResponse>) => {
      state.data = action.payload;
    },
    incrementPage: state => {
      state.page += 1;
    },
    decrementPage: state => {
      state.page -= 1;
    },
  },
});

export const {
  getData,
  incrementPage,
  decrementPage,
  startFetchingData,
  stopFetchingData,
} = dataSlice.actions;

export default dataSlice.reducer;
