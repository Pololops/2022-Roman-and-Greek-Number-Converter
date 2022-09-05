import { render, screen } from '@testing-library/react';
import Form from "./Form";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Form />);

    expect(screen.getByRole('heading', {level: 1})).toHaveTextContent('Roman Number Converter');
  });
});
