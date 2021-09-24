/* eslint-disable func-names */
/* eslint-disable import/no-anonymous-default-export */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import countryReducer from './country';
import api from './middleware/api';

export default function () {
  return configureStore({
    reducer: {
      country: countryReducer,
    },
    middleware: [
      ...getDefaultMiddleware(),
      api,
    ],
  });
}
