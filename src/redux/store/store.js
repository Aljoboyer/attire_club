import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import {api} from '../api';
import {persistReducer, persistStore} from 'redux-persist';
import localforage from 'localforage';
import { rootReducer } from '../rootreducer';

const persistConfig={
  key: 'persist-store', 
  storage: localforage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),

})

setupListeners(store.dispatch)

export const persistor = persistStore(store);