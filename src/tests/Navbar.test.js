import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router, Link } from 'react-router-dom';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Router basename={process.env.PUBLIC_URL}>
        <nav>
          <div className="navbar">
            <Link
              to="/"
              className="brand-logo left"
            >
              <div>
                European Countries
              </div>
            </Link>
            <ul className="right">
              <li><i className="material-icons mx-1">mic</i></li>
              <li><i className="material-icons">settings</i></li>
            </ul>
          </div>
        </nav>
      </Router>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
