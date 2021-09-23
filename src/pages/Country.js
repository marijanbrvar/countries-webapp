import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentCountry } from '../redux/country';

const Country = (props) => {
  const { country } = props.match.params
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentCountry(country))
  }, [])
  
  const cntry = useSelector((state) => state.country.currentCountry);
  console.log(cntry);

  return (
    <div>
      <h1>Details details</h1>
    </div>
  )
}

export default Country
