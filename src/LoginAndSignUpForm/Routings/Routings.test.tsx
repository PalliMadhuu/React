import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routings from './Routings';

describe('<Routings />', () => {
  test('it should mount', () => {
    render(<Routings />);
    
    const routings = screen.getByTestId('Routings');

    expect(routings).toBeInTheDocument();
  });
});