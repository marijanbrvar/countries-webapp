/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Main = () => {
  const { continents } = useSelector((state) => state.country);

  return (
    <div className="main">
      <h3>Select Continent</h3>
      <ul className="section">
        {continents.map((cont, idx) => (
          <li key={idx} className="list-item">
            <Link to={`/${cont}`}>
              <div>
                <h2>{cont}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
