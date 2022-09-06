import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Result from '../Result/Result';
import RomanConverter from "../../converter/RomanConverter";
import './style.scss';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    const numberValue = Number(event.target.value);

    if (value !== '' && (isNaN(numberValue) || numberValue <= 0 || numberValue > 3999)) {
      setErrorMessage('You can only convert integer between 1 and 3999');
    } else {
      setErrorMessage('');
      setInputValue(event.target.value);
    }
  };

  useEffect(() => {
    const roman = new RomanConverter();
    setResult(roman.convert(Number(inputValue)));
  }, [inputValue]);

  return (
    <div className="App" data-testid="app">
      <Header />
      <div className="main">
        <Form inputValue={inputValue} onInputChange={handleInputChange} />
        <ErrorMessage messageText={errorMessage} />
        <Result resultText={result} />
      </div>
    </div>
  );
}

export default App;
