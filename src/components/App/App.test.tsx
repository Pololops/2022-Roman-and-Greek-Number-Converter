import { render, within, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import App from './App';

const setup = () => {
  const utils = render(<App />);
  const app = utils.getByTestId('app') as HTMLElement;

  const form = within(app).queryByTestId('form') as HTMLFormElement;
  const input = within(form).queryByTestId('input') as HTMLInputElement;
  const errorMessage = within(app).queryByTestId('error-message') as HTMLElement;
  const result = within(app).queryByTestId('result') as HTMLElement;

  return {
    app,
    form,
    input,
    errorMessage,
    result,
    ...utils,
  }
}

afterEach(cleanup);

describe('App', () => {
  test('renders App component', async () => {
    const { app, form, input, errorMessage, result } = setup();

    expect(app).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(result).toBeInTheDocument();
  });

  test('pass valid value to test input field, error message and result', async () => {
    const { input, result, errorMessage } = setup();

    userEvent.type(input, '1');
    expect(input.value).toBe('1');
    expect(result).not.toHaveTextContent('');
    expect(errorMessage).toHaveTextContent('');
  });

  test('pass invalid value to test input field, error message and result', async () => {
    const { input, errorMessage } = setup();

    userEvent.type(input, '0');
    expect(input.value).not.toBe('0');

    userEvent.type(input, 'o');
    expect(input.value).not.toBe('o');

    userEvent.type(input, '4000');
    expect(input.value).not.toBe('4000');

    expect(errorMessage).not.toHaveTextContent('');
  });
});
