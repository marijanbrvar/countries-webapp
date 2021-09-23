import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  continents: ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  currentContinent: 'Europe',
  countryList: null,
  currentCountry: null
}

export const loadCountries = createAsyncThunk('fetchData', async (continent) => {
  const res = await fetch(`https://restcountries.com/v2/continent/${continent}`)
  const data = res.json();

  return data
});

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {}
})


// export {} = countrySlice.actions

export default countrySlice.reducer;
