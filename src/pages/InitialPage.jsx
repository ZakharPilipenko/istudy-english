import React, { useState } from 'react';
import { GAME_TYPES } from '../settings';
import DropDown from '../components/UI/dropdown/DropDown';
import classes from "../components/UI/dropdown/DropDown.module.css"

const InitialPage = ({onStart}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  
  const handleStart = (type) => {
        onStart(type);
  };

    return (
        <section className="rules container">
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
            menu= {GAME_TYPES.map(({type, text}) => (
              <button
                key={type}
                className={`ico-button ico-button-${type}`}
                onClick={() => handleStart(type)}
              >
                {text}
              </button>
            ))}
          />
         
        </section>
    );
};

export default InitialPage;