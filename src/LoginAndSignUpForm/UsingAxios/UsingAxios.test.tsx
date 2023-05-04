import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UsingAxios from './UsingAxios';

describe('<UsingAxios />', () => {
  test('it should mount', () => {
    render(<UsingAxios />);
    
    const usingAxios = screen.getByTestId('UsingAxios');

    expect(usingAxios).toBeInTheDocument();
  });
});