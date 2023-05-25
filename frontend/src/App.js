import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    getName();
  });

  const getName = async () => {
    const res = await axios.get('/names');
    setName(res.data);
    console.log(res);
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React with bro {name}
        </a>
      </header>
    </div>
  );
}

export default App;
