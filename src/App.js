import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

// Takes Header.js from components
import Header from './components/Header';
import Home from './components/Home';
import { useMediaQuery } from 'react-responsive';

function App() {

 

  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}



export default App;
