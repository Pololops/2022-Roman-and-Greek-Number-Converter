import { render, cleanup } from '@testing-library/react';
import Result from "./Result";

const setup = () => {
  const utils = render(<Result resultText={''}/>);
  const result = utils.getByTestId('result') as HTMLInputElement;
  return {
    result,
    ...utils,
  }
}

afterEach(cleanup);

describe('ErrorMessage', () => {
  test('renders ErrorMessage component', () => {
    const { result } = setup();

    expect(result).toBeInTheDocument();
    expect(result).toHaveAttribute('class', 'result');
    expect(result).toHaveTextContent('');
  });
});
