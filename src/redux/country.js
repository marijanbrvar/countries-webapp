/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

export const slice = createSlice({
  name: 'country',
  initialState: {
    continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
    currentContinent: null,
    list: [],
    currentCountry: null,
    loading: false,
  },
  reducers: {
    countryRequested: (country) => {
      country.loading = true;
    },
    countryReceived: (country, action) => {
      country.list = action.payload;
      country.loading = false;
    },
    countryRequestFailed: (country) => {
      country.loading = false;
    },
    setCurrentContinent: (continent, action) => {
      continent.currentContinent = action.payload;
    },
    clearCurrentContry: (country) => {
      country.currentCountry = null;
    },
    setCurrentCountry: (country, action) => {
      country.loading = true;
      const current = country.list.findIndex((state) => state.alpha2Code === action.payload);
      country.currentCountry = country.list[current];
      country.loading = false;
    },
  },
});

export const {
  countryRequested,
  countryReceived,
  countryRequestFailed,
  setCurrentContinent,
  setCurrentCountry,
  clearCurrentContry,
} = slice.actions;

export default slice.reducer;

export const loadCountries = (url) => (dispatch) => dispatch(
  apiCallBegan({
    url,
    onStart: countryRequested.type,
    onSuccess: countryReceived.type,
    onErrorL: countryRequestFailed.type,
  }),
);
