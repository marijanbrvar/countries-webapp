import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setCurrentContinent, clearCurrentContry } from '../redux/country';

const Navbar = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { currentContinent, currentCountry } = useSelector((state) => state.country);
  console.log('location', history.location.pathname);
  const goBack = () => {
    
    history.push('/');
    dispatch(setCurrentContinent(null))
    console.log(history.location.pathname === '/');
    if (history.location.pathname === '/' ) { return clearCurrentContry() };
  }

  return (
    <div>
      <h1>
        {currentContinent !== null &&  <i onClick={() => goBack()} className="material-icons">chevron_left</i>}
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
  )
}

export default Navbar
