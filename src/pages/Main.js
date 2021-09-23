import React from 'react'
import { useSelector } from 'react-redux'

const Main = () => {
  const { continents } = useSelector((state) => state.country)

  return (
    <div>
      <h1>Main page</h1>
      <ul>
        {continents.map((cont, idx) => <li key={idx}>{cont}</li>)}
      </ul>
    </div>
  )
}

export default Main
