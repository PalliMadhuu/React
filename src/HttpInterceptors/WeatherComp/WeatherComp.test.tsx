import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WeatherComp from './WeatherComp';

describe('<WeatherComp />', () => {
  test('it should mount', () => {
    render(<WeatherComp />);
    
    const weatherComp = screen.getByTestId('WeatherComp');

    expect(weatherComp).toBeInTheDocument();
  });
});