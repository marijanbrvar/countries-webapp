/* eslint-disable import/prefer-default-export */
import countries from './countries';
import { countryReceived } from '../country';

export const getCountries = (countries) => ({
  type: countryReceived.type,
  payload: countries,
});

export const setCountries = () => (dispatch) => {
  dispatch(getCountries(countries));
  return countries;
};
