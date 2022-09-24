import {
  render,
  within,
} from '@testing-library/react';
import { ChangeEvent } from 'react';

import Form from "./Form";

const setup = () => {
  const utils = render(
    <Form
      activeLang={''}
      radioValues={[]}
      inputValue={''}
      onInputChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }}
      onRadioChange={function (event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.');
      }}
    />);
  const form = utils.getByTestId('form') as HTMLFormElement;
  const input = within(form).queryByTestId('input') as HTMLInputElement;
  return {
    form,
    input,
    ...utils,
  }
}

describe('Form', () => {
  test('renders Form component', async () => {
    const { form, input } = setup();

    expect(form).toHaveAttribute('class', 'form');
    expect(input).toBeInTheDocument();
  });
});
