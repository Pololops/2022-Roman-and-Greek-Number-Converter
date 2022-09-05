import React from 'react';
import "./style.scss";

interface Props {
    inputText: string;
    onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({inputText, onChangeValue}: Props) {
  return (
    <input
      className="input"
      name="name"
      type="text"
      placeholder="Enter a number to convert"
      value={inputText}
      onChange={onChangeValue}
    />
  );
}
