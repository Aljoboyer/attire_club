import {combineReducers} from '@reduxjs/toolkit';
import { counterReducer } from './slices/counterslice';
import { api } from './api';

// add the necessary reducers here //
export const rootReducer = combineReducers({
  counter: counterReducer,
  [api.reducerPath]: api.reducer,
});
