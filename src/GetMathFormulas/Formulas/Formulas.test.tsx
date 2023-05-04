import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Formulas from './Formulas';

describe('<Formulas />', () => {
  test('it should mount', () => {
    render(<Formulas />);
    
    const formulas = screen.getByTestId('Formulas');

    expect(formulas).toBeInTheDocument();
  });
});