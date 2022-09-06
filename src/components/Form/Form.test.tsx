import { render } from '@testing-library/react';
import Form from "./Form";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Form />);
  });

  test('calls the onSubmit callback handler', () => {
    render(<Form />);
  });
});
