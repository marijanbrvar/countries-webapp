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

  const goBack = () => {
    if (history.location.pathname === '/') { return clearCurrentContry(); }
    dispatch(setCurrentContinent(null));
    return history.push('/');
  };

  const truncate = (str) => (str.length > 10 ? `${str.substring(0, 7)}...` : str);

  return (
    <nav>
      <h1>
        {currentContinent !== null && <i onClick={() => goBack()} className="material-icons">chevron_left</i>}
        {
        currentContinent === null
          ? 'Countries App'
          : currentCountry !== null
            ? truncate(currentCountry.name)
            : currentContinent
        }
      </h1>
      <div>
        <i className="material-icons mx-1">mic</i>
        <i className="material-icons">settings</i>
      </div>
    </nav>
  );
};

export default Navbar;
