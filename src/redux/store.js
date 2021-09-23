/* eslint-disable import/no-anonymous-default-export */
import { configureStore } from "@reduxjs/toolkit";
import countryReducer from './country';

export default configureStore({
  reducer: {
    country: countryReducer,
  },
});
