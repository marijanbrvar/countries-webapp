/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCountry } from '../redux/country';

const Country = (props) => {
  const { country } = props.match.params;
  const { loading, currentCountry } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentCountry(country));
  }, []);

  if (!loading && currentCountry === null) return <p>Loading...</p>;

  const {
    name,
    nativeName,
    capital,
    flags,
    area,
    population,
    demonym,
    region,
    topLevelDomain,
  } = currentCountry;

  return (
    <div>
      <div className="list-card">
        <div className="card-header">
          <div>
            <div>
              <img src={flags[0]} alt={name} />
            </div>
            <h2>
              {name}
            </h2>
          </div>
        </div>
        <div className="list-item">
          <p>Native name:</p>
          <div>{nativeName}</div>
        </div>
        <div className="list-item">
          <p>Capital city:</p>
          <div>{capital}</div>
        </div>
        <div className="list-item">
          <p>Area sqm:</p>
          <div>{area}</div>
        </div>
        <div className="list-item">
          <p>Population:</p>
          <div>{population}</div>
        </div>
        <div className="list-item">
          <p>Demonym:</p>
          <div>{demonym}</div>
        </div>
        <div className="list-item">
          <p>Region:</p>
          <div>{region}</div>
        </div>
        <div className="list-item">
          <p>Top level domain:</p>
          <div>{topLevelDomain[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default Country;
