import React, {  useContext, useEffect, useState } from 'react';
import InitialPage from './InitialPage';
import GamePage from './GamePage';
import ResultsPage from './ResultsPage';
import { AppRoute, RANDOMIZED } from '../settings';
import { observer } from 'mobx-react-lite';
import { Context } from '../index.js';
import { fetchCards, fetchLevels, fetchThemes, fetchTypes } from '../http/CardAPI';



const Game = observer(({results}) => {

        const {card} = useContext(Context);
        const [page, setPage] = useState(AppRoute.Initial);
        const [result, setResult] = useState(0);
        const [cards, setCards] = useState([]);
        const [gameTheme, setGameTheme] = useState(null);

        useEffect(()=> {
          fetchTypes().then((data) => card.setTypes(data))
          fetchLevels().then((data) => card.setLevels(data))
          fetchThemes().then((data) => card.setThemes(data))
          fetchCards().then((data) => card.setCards(data.rows))
        },[])


        const showResults = (stepsCount) => {
            setResult(stepsCount);
            setPage(AppRoute.Results);
        };
    
        const handleReset = () => {
            setPage(AppRoute.Initial);
        };
    
        const handleStart = (level) => {
            setCards(getImages(level));
            setGameTheme(getTheme(level));
            setPage(AppRoute.Game);
        };

        const getTheme = (level) => {
          const imageCollection = card.cards;
          const oneCard = imageCollection.find(card => card.levelId === level.id);
          const findTheme = card.themes.find(theme => theme.id === oneCard.themeId);
          const themeName = findTheme ? findTheme.name : 'cats';
          console.log(themeName)
          return themeName;
        }
        

        const getImages = (level) => {
          const imageCollection = card.cards;
          const imagePairs = imageCollection.filter(card => card.levelId === level.id);
          const mergedImages = imagePairs.map((item) => ({
            ...item,
            id: `${item.id}-1`,
          }));
          return RANDOMIZED
            ? mergedImages.sort(() => 0.5 - Math.random())
            : mergedImages;
        };
          
        const getPage = (route) => {
            switch (route) {
              case AppRoute.Initial:
                return <InitialPage handleStart={handleStart} gameTheme={gameTheme}/>;
              case AppRoute.Game:
                return <GamePage cards={cards}  gameTheme={gameTheme} onShowResults={showResults} />;
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
      })

export default Game;