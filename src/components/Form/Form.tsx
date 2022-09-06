import React from 'react';
import Input from "../Input/Input";
import "./style.scss";

interface Props {
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Form({inputValue, onInputChange}: Props) {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
      <form className="form" data-testid="form" onSubmit={handleFormSubmit}>
        <Input inputValue={inputValue} onInputChange={onInputChange} />
      </form>
  );
}
