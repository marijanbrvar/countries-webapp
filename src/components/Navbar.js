/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCurrentContinent, clearCurrentContry } from '../redux/country';

const Navbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { currentContinent } = useSelector((state) => state.country);

  const goBack = () => {
    if (history.location.pathname === '/') { return clearCurrentContry(); }
    dispatch(setCurrentContinent(null));
    return history.push('/');
  };

  return (
    <nav>
      <h1>
        {currentContinent !== null && <i onClick={() => goBack()} className="material-icons">chevron_left</i>}
        {
        currentContinent === null
          ? 'Countries App'
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
