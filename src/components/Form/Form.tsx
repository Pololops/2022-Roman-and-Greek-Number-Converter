import React, { useState } from 'react';
import "./style.scss";

import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {

	const [errorMessage, setErrorMessage] = useState('');

  return (
    <main className="main">
      <form className="main__form">
        <Input />
        <Button />
      </form>
    </main>
  );
}
