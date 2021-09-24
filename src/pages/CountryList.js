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
    <div className="main">
      <h3>Country List page</h3>
      <ul className="section">
        {countries.map((country) => (
          <li className="list-item" key={country.alpha2Code}>
            <Link to={`/${continent}/${country.alpha2Code}`}>
              <div>
                <h2>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
