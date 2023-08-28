import React, { useState } from 'react';
import Hearts from '../components/UI/Hearts';
import Grid from '../components/UI/Grid';
import Modal from '../components/UI/Modal';
import Progress from '../components/UI/Progress';
import InitialPage from './InitialPage';
import GamePage from './GamePage';
import ResultsPage from './ResultsPage';
import { AppRoute } from '../settings';

const Game = ({getImages, results}) => {
        const [page, setPage] = useState(AppRoute.Initial);
        const [result, setResult] = useState(0);
        const [images, setImages] = useState([]);
        const [gameType, setGameType] = useState(null);
    
        const showResults = (stepsCount) => {
            setResult(stepsCount);
            setPage(AppRoute.Results);
        };
    
        const handleReset = () => {
            setPage(AppRoute.Initial);
        };
    
        const handleStart = (type) => {
            setImages(getImages(type));
            setGameType(type);
            setPage(AppRoute.Game);
        };
          
        const getPage = (route) => {
            switch (route) {
              case AppRoute.Initial:
                return <InitialPage onStart={handleStart} />;
              case AppRoute.Game:
                return <GamePage images={images} gameType={gameType} onShowResults={showResults} />;
              case AppRoute.Results:
                return (
                  <ResultsPage
                    stepsCount={result}
                    onResetGame={handleReset}
                    results={results}
                  />
                );
              default:
                return null;
            }
        };
          return getPage(page);
      }

export default Game;