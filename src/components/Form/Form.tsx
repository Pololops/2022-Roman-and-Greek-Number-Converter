import React from 'react';
import Toggle from "../Toggle/Toggle";
import Input from "../Input/Input";
import "./style.scss";

interface Props {
  activeLang: string;
  radioValues: string[];
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Form({activeLang, radioValues, inputValue, onInputChange, onRadioChange }: Props) {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
      <form className="form" data-testid="form" onSubmit={handleFormSubmit}>
        <Toggle languages={radioValues} activeLang={activeLang} onRadioChange={onRadioChange} />
        <Input inputValue={inputValue} onInputChange={onInputChange} />
      </form>
  );
}
