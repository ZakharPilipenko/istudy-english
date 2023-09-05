import React, {  useContext, useState } from 'react';
import DropDown from '../components/UI/dropdown/DropDown';
import classes from "../components/UI/dropdown/DropDown.module.css"
import { Context } from '../index.js';


const InitialPage = ({handleStart}) => {
  const {card} = useContext(Context);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  
  const handleSelectedLevel= (level) => {
        handleStart(level);
  };

  const getTheme = (level) => {
    const cardsForLevel = card.cards.filter((card) => card.levelId === level.id);
    const themeIds = [...new Set(cardsForLevel.map((card) => card.themeId))];
    const themesForLevel = card.themes.filter((theme) => themeIds.includes(theme.id));
    const themeName = themesForLevel.length > 0 ? themesForLevel[0].name : 'cats';
    return themeName;
  };
  
    return (
        <section className="rules gameContainer">
          <h2>Добро пожаловать!</h2>
          <p>Memory — игра для тренировки визуальной памяти</p>
          <div className="rules-panel">
            <h3>Правила игры</h3>
            <ul className="rules-list">
              <li>В наборе есть множество карточек – по две штуки, где одна с рисунком, а другая с надписью.</li>
              <li>Нужно разложить карточки «рубашкой» вверх на столе, а затем переворачивать по две.</li>
              <li>Если они совпадают – игрок забирает их и получает ещё один ход.</li>
            </ul>
          </div>

          <DropDown
            open={open}
            trigger={<button onClick={handleOpen} className={classes.triggerButton}>Выберите уровень</button>}
            menu= {[card.levels.map((level) => (
              <button
                key={level.id}
                className={`ico-button ico-button-${getTheme(level)}`}
                onClick={() => handleSelectedLevel(level)}
                style={{marginBottom: '5px'}}
              >
                {level.name}
              </button>
            ))]}
          />
         
        </section>
    );
};

export default InitialPage;