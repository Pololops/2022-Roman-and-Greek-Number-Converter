import React, { useState } from 'react';
import "./style.scss";

import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {

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
    <main className="main">
      <form className="main__form" >
        <Input inputText={inputValue} onChangeValue={handleInputChange}/>
        <Button />
      </form>
    </main>
  );
}
