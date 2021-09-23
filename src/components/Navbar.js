import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const continent = useSelector((state) => state.country.currentContinent);
  return (
    <div>
      <h1>{continent}</h1>
    </div>
  )
}

export default Navbar
