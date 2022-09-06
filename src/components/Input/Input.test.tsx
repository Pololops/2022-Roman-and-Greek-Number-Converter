import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ChangeEvent } from 'react';
import Input from "./Input";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Input />);

    const input = screen.getByTestId('input');

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

  test('pass valid number to test input field', () => {
    render(<Input />);

    const input = screen.getByTestId('input');

    userEvent.type(input, '1');
    expect(input).toHaveValue('1');
  });

  test('pass invalid number or letter to test input field', () => {
    render(<Input />);

    const input = screen.getByTestId('input');

    userEvent.type(input, '0');
    expect(input).toHaveValue('');

    userEvent.type(input, 'o');
    expect(input).toHaveValue('');

    userEvent.type(input, '4000');
    expect(input).toHaveValue('400');
  });

  //test('calls the onChange callback handler', () => {
  //  const onChangeValue = jest.fn();
//
  //  render(
  //    <Input inputText={''} onChangeValue={onChangeValue} />
  //  );
//
  //  fireEvent.change(screen.getByRole('textbox'), {
  //    target: { value: '100' },
  //  });
  //  expect(onChangeValue).toHaveBeenCalledTimes(1);
  //});
});
