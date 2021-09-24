/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
  const { continents } = useSelector((state) => state.country);

  return (
    <div>
      <h1>Main page</h1>
      <ul>
        {continents.map((cont, idx) => <li key={idx}><Link to={`/${cont}`}>{cont}</Link></li>)}
      </ul>
    </div>
  );
};

export default Main;
