import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {currentContinent } = useSelector((state) => state.country);
  return (
    <div>
      <h1>{currentContinent}</h1>
      <i className="material-icons mx-1">mic</i>
      <i className="material-icons">settings</i>
    </div>
  )
}

export default Navbar
