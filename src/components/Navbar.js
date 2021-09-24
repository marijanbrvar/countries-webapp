/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentContinent, clearCurrentContry } from '../redux/country';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentContinent, currentCountry } = useSelector((state) => state.country);
  // console.log('location', history.location.pathname);
  const goBack = () => {
    if (history.location.pathname === '/') { return clearCurrentContry(); }
    dispatch(setCurrentContinent(null));
    return history.push('/');
    // console.log(history.location.pathname === '/');
  };

  return (
    <div>
      <h1>
        {currentContinent !== null && <i onClick={() => goBack()} className="material-icons">chevron_left</i>}
        {
        currentContinent === null
          ? 'Countries App'
          : currentCountry !== null
            ? currentCountry.name
            : currentContinent
        }
      </h1>
      <i className="material-icons mx-1">mic</i>
      <i className="material-icons">settings</i>
    </div>
  );
};

export default Navbar;
