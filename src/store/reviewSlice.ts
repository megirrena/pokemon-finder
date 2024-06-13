import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReviewState {
  rating: number;
}

const initialState: ReviewState = {
  rating: 0,
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
  },
});

export const { setRating } = reviewSlice.actions;

export default reviewSlice.reducer;
