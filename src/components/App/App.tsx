import React from 'react';
import Header from '../Header/Header';
import Form from '../Form/Form';
import Message from '../Message/Message';
import './style.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Form />
        <Message messageText={''} />
      </div>
    </div>
  );
}

export default App;
