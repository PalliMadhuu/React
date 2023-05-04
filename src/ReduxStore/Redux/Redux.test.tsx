import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Redux from './Redux';

describe('<Redux />', () => {
  test('it should mount', () => {
    render(<Redux />);
    
    const redux = screen.getByTestId('Redux');

    expect(redux).toBeInTheDocument();
  });
});