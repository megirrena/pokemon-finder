import { configureStore } from '@reduxjs/toolkit';
import reviewReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    review: reviewReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
