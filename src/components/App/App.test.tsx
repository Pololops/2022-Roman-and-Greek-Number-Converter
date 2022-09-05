import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders "Roman Number Converter" text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Roman Number Converter/i);
  expect(linkElement).toBeInTheDocument();
});
