/* eslint-disable no-unused-expressions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import App from './App';
import store from './redux/store';

describe('Homepage tests', () => {
  test('Country display', async () => {
    render(<Provider store={store()}><App /></Provider>);
    expect(await screen.findByText('Countries App')).toBeInTheDocument;
  });
});

test('Continent click', async () => {
  render(<Provider store={store()}><App /></Provider>);
  userEvent.click(await screen.findByText('Europe'));
  expect(await screen.findByText('Loading...')).toBeInTheDocument;
});
