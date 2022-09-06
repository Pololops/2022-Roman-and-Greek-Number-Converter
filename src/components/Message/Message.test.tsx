import { render, screen } from '@testing-library/react';
import Message from "./Message";

describe('Input', () => {
  test('renders Input component', () => {
    render(<Message messageText={''}/>);
  });
});
