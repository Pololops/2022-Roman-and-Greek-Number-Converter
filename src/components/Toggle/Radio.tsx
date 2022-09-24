import React from 'react';
import "./style.scss";

interface Props {
  name: string
  language: string
  onRadioChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
  checked: boolean
}

export default function Radio({ name, language, onRadioChange, className, checked }: Props) {
  return (
    <label className={className}>
      <input checked={checked} type="radio" name={name} value={language} onChange={onRadioChange} />
      {language}
    </label>
  );
}
