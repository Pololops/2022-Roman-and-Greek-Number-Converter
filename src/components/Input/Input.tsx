import React, { useRef, useEffect } from 'react';
import "./style.scss";

interface Props {
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({inputValue, onInputChange}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <input
      ref={inputRef} // autoFocus
      className="input"
      data-testid="input"
      name="input"
      type="text"
      placeholder="Enter a number to convert"
      min="1"
      max="3999"
      step="1"
      value={inputValue}
      onChange={onInputChange}
      required
      autoComplete="off"
    />
  );
}
