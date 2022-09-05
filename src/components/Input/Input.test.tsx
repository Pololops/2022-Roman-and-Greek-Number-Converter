import { render, screen } from '@testing-library/react';
import Input from "./Input";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Input />);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Roman Number Converter');
  });
});
