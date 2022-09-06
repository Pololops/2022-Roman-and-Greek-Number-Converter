import { render, cleanup } from '@testing-library/react';
import { ChangeEvent } from 'react';
import Input from "./Input";

const setup = () => {
  const utils = render(<Input inputValue={''} onInputChange={function (event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  } } />);
  const input = utils.getByTestId('input') as HTMLInputElement;
  return {
    input,
    ...utils,
  }
}

afterEach(cleanup);

describe('Input', () => {
  test('renders Input component', () => {
    const { input } = setup();

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('class', 'input');
    expect(input).toHaveAttribute('name', 'input');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('placeholder', 'Enter a number to convert');
    expect(input).toHaveAttribute('maxlength', '4');
    expect(input).toHaveAttribute('min', '1');
    expect(input).toHaveAttribute('max', '3999');
    expect(input).toHaveAttribute('step', '1');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('autocomplete', 'off');
  });
});
