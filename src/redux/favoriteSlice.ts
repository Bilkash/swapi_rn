import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FavoriteState {
  male: string[] | [];
  female: string[] | [];
  other: string[] | [];
}

const initialState: FavoriteState = {
  male: [],
  female: [],
  other: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addItemToFavorite: (
      state,
      action: PayloadAction<{ name: string; gender: keyof FavoriteState }>,
    ) => {
      state[action.payload.gender] = [
        ...state[action.payload.gender],
        action.payload.name,
      ];
    },
    deleteItemFromFavorite: (
      state,
      action: PayloadAction<{ name: string; gender: keyof FavoriteState }>,
    ) => {
      state[action.payload.gender] = state[action.payload.gender].filter(
        it => action.payload.name !== it,
      );
    },
    resetFavorite: state => {
      return initialState;
    },
  },
});

export const { addItemToFavorite, deleteItemFromFavorite, resetFavorite } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
