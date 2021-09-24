import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCountries, setCurrentContinent } from '../redux/country'
import { Link } from 'react-router-dom'



const CountryList = (props) => {
  const { continent } = props.match.params
  const dispatch = useDispatch()
  const countries = useSelector((state) => state.country.list )
  
  useEffect(() => {
    dispatch(setCurrentContinent(continent))
    dispatch(loadCountries(`/${continent}`))
  }, [])

  return (
    <div>
      <h1>Country List page</h1>
      <ul>
        {countries.map((country) => <li key={country.alpha2Code}><Link to={`/${continent}/${country.alpha2Code}`}>{country.name}</Link></li>)}
      </ul>
    </div>
  )
}

export default CountryList;
