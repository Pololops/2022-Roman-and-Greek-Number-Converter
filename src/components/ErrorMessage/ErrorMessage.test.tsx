import { render, cleanup } from '@testing-library/react';
import ErrorMessage from "./ErrorMessage";

const setup = () => {
  const utils = render(<ErrorMessage messageText={''}/>);
  const errorMessage = utils.getByTestId('error-message') as HTMLInputElement;
  return {
    errorMessage,
    ...utils,
  }
}

afterEach(cleanup);

describe('ErrorMessage', () => {
  test('renders ErrorMessage component', () => {
    const { errorMessage } = setup();

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute('class', 'error-message');
    expect(errorMessage).toHaveTextContent('');
  });
});
