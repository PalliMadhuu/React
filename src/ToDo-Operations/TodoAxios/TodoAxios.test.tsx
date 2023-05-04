import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoAxios from './TodoAxios';

describe('<TodoAxios />', () => {
  test('it should mount', () => {
    render(<TodoAxios />);
    
    const todoAxios = screen.getByTestId('TodoAxios');

    expect(todoAxios).toBeInTheDocument();
  });
});