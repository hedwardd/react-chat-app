import React from 'react';
import { ChatEngine } from 'react-chat-engine';

import logo from './logo.svg';
import './App.css';

const { REACT_APP_PUBLIC_KEY, REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env;

function App() {
  return (
    <ChatEngine
      publicKey={REACT_APP_PUBLIC_KEY}
      userName={REACT_APP_USERNAME}
      userPassword={REACT_APP_PASSWORD}
    />
  );
}

export default App;
