import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import themeReducer from '@features/themeSlice';
import alertReducer from '@features/alertSlice';
import navbarSlice from '@features/navbarSlice';
import loaderSlice from '@features/loaderSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    alert: alertReducer,
    navbar: navbarSlice,
    loader: loaderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
