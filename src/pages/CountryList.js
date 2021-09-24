/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCountries, setCurrentContinent } from '../redux/country';

const CountryList = (props) => {
  const { continent } = props.match.params;
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.list);

  useEffect(() => {
    dispatch(setCurrentContinent(continent));
    dispatch(loadCountries(`/${continent}`));
  }, []);

  return (
    <div>
      <h3>Country List page</h3>
      <ul>
        {countries.map((country) => <li key={country.alpha2Code}><Link to={`/${continent}/${country.alpha2Code}`}>{country.name}</Link></li>)}
      </ul>
    </div>
  );
};

export default CountryList;
