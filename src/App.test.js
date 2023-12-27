// App.test.js
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Snowfall from './Snowfall';

// Mock the Snowfall component to avoid testing its internal behavior here
jest.mock('./Snowfall', () => {
  return function DummySnowfall(props) {
    return <div data-testid="snowfall" />;
  };
});

describe('App Component', () => {
  test('renders Snowfall component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('snowfall')).toBeInTheDocument();
  });
});
