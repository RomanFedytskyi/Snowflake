import React from 'react';
import { render, screen } from '@testing-library/react';
import Snowflake from './Snowflake';

describe('Snowflake Component', () => {
  test('renders snowflake character', () => {
    render(<Snowflake size="2rem" />);
    const snowflakeElement = screen.getByText('❄️');
    expect(snowflakeElement).toBeInTheDocument();
  });
});
