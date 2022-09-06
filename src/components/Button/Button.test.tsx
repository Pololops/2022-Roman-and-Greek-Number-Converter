import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Button />);

    expect(screen.getByRole('button', { name: /Convert/i })).toBeInTheDocument();
  });
});