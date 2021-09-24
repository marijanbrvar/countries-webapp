/* eslint-disable import/prefer-default-export */
import countries from './countries';
import { GET_COUNTRIES } from '../actions/types';

export const getCountries = (countries) => ({
  type: GET_COUNTRIES,
  payload: countries,
});

export const setCountries = () => (dispatch) => {
  dispatch(getCountries(countries));
  return countries;
};
