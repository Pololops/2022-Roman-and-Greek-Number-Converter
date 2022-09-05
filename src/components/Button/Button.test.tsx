import { render, screen } from '@testing-library/react';
import Button from "./Button";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Button />);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Roman Number Converter');
  });
});
