import { render, screen } from '@testing-library/react';
import { ChangeEvent } from 'react';
import Input from "./Input";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Input inputText={''} onChangeValue={function (e: ChangeEvent<HTMLInputElement>): void {
      throw new Error('Function not implemented.');
    } } />);
  });
});
