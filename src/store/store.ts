import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { accountReducer } from './auth.reducer';

export const store = configureStore({
  reducer: {
    accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
