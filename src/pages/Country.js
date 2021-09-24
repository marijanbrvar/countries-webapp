/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentCountry } from '../redux/country';

const Country = (props) => {
  const { country } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentCountry(country));
  }, []);

  const cntry = useSelector((state) => state.country.currentCountry);

  return (
    <div>
      <h1>
        {cntry.name}
        {' '}
        Details details
      </h1>
    </div>
  );
};

export default Country;
