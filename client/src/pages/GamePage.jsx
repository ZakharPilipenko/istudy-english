import React from 'react';
import Progress from '../components/UI/Progress';
import Grid from '../components/UI/Grid';
import Modal from '../components/UI/Modal';
import { useGame } from '../components/UI/utils/UseGame';

const GamePage = ({cards = [], onShowResults, gameTheme}) => {
    const {
        finishedItems,
        stepsCount,
        checkItems,
        isWin
    } = useGame(cards);


    const handleResultsClick = () => {
         onShowResults(stepsCount);
    };
    return (
            <section className="game container">
              <Progress value={finishedItems.length / 2} max={cards.length / 2} />
              <div className="steps">Шаг {stepsCount}</div>
              <Grid
                cards={cards}
                gameTheme={gameTheme}
                finishedItems={finishedItems}
                checkItems={checkItems}
              />
              {isWin && (
                <Modal>
                  <h3 className="modalGame-caption">Победа!</h3>
                  <p className="modalGame-description">Теперь давайте узнаем результаты этой партии</p>
                  <button className="button modalGame-button" type="button" onClick={handleResultsClick}>Показать результаты</button>
                </Modal>
              )}
            </section>
          );
}

export default GamePage;