import React, { useState } from 'react';
import "./style.scss";

export default function Input() {
  const [errorMessage, setErrorMessage] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: { target: { value: string; }; }) => {
    const value: string = event.target.value;
    const numberValue = Number(event.target.value);
    if (value !== '' && (isNaN(numberValue) || numberValue <= 0 || numberValue > 3999)) {
      setErrorMessage('You can only convert integer between 1 and 3999');
    } else {
      setInputValue(event.target.value);
    }
  };

  return (
    <>
    <input
      className="input"
      data-testid="input"
      name="input"
      type="text"
      placeholder="Enter a number to convert"
      maxLength={4}
      min="1"
      max="3999"
      step="1"
      value={inputValue}
      onChange={handleInputChange}
      required
      autoFocus
      autoComplete="off"
    />
    </>
  );
}
