import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Result from '../Result/Result';
import NumberConverter from "../../converter/numberConverter";
import './style.scss';

function App() {
  const [languages, setLanguages] = useState([] as string[]);
  const [activeLang, setActiveLang] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState('');
  const [isResultDisplay, setIsResultDisplay] = useState(true);

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

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    setActiveLang(value);
  }

  useEffect(() => {
    const combinations = new NumberConverter('roman').combinations
    const combinationsKeys: string[] = Object.keys(combinations[combinations.length - 1]);
    const filterCombinationsKeys =  combinationsKeys.filter((key) => (key !== 'value') && key)
    setLanguages(filterCombinationsKeys);
    setActiveLang(filterCombinationsKeys[0])
  }, []);

  useEffect(() => {
    setIsResultDisplay(false);
    const converter = new NumberConverter(activeLang);
    setTimeout(() => {
      setResult(converter.convert(Number(inputValue)));
      setIsResultDisplay(true);
    }, 200);
  }, [inputValue, activeLang]);

  return (
    <div className="App" data-testid="app">
      <Header />
      <div className="main">
        <Form radioValues={languages} activeLang={activeLang} inputValue={inputValue} onInputChange={handleInputChange} onRadioChange={handleRadioChange} />
        <ErrorMessage messageText={errorMessage} />
        <Result resultText={result} isDisplay={isResultDisplay} />
      </div>
    </div>
  );
}

export default App;
