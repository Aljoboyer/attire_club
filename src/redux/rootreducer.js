import {combineReducers} from '@reduxjs/toolkit';
import { api } from './api';
import { productReducer } from './slices/productSlice';

// add the necessary reducers here //
export const rootReducer = combineReducers({
  prodstore: productReducer,
  [api.reducerPath]: api.reducer,
});
