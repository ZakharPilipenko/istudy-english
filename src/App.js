import React, { useState } from 'react';
import Game from './pages/Game';
import './styles/App.css';
import InitialPage from './pages/InitialPage';
import { getImages, results } from '../src/data.js';

function App() {

  return (
    <Game getImages={getImages} results={results}/>
  );
}

export default App;
