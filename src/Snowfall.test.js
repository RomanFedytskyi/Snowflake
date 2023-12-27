import React from 'react';
import { render, act } from '@testing-library/react';
import Snowfall from './Snowfall';

jest.mock('./Snowflake', () => ({ size, left, top }) => (
  <div data-testid="snowflake" style={{ left, top, fontSize: size }}></div>
));

describe('Snowfall Component', () => {
  it('generates snowflakes', () => {
    jest.useFakeTimers();
    const { queryAllByTestId } = render(<Snowfall />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(queryAllByTestId('snowflake').length).toBeGreaterThan(0);
    
    jest.useRealTimers();
  });

  it('respects intensity prop', () => {
    jest.useFakeTimers();
    const intensity = 100000;
    const { queryAllByTestId } = render(<Snowfall intensity={intensity} />);

    act(() => {
      jest.advanceTimersByTime(50);
    });

    expect(queryAllByTestId('snowflake').length).toBeLessThan(6);
    
    jest.useRealTimers();
  });
});
