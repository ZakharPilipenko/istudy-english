import React from 'react';
import getDeclension  from '@dubaua/get-declension';
import ResultsTable from '../components/UI/ResultsTable';

const ResultsPage = ({ stepsCount, results, onResetGame }) => {

    const stepsDeclension = getDeclension({count: stepsCount, one: 'шаг', few: 'шага', many: 'шагов'});
    return (
        <section className="result container">
          <h2>Лучшие результаты:</h2>
          <p>Вы завершили игру за <b>{stepsDeclension}</b>, так держать!</p>
          <ResultsTable
              current={stepsCount} 
              results={results} 
          />
          <p>Хотите попробовать ещё раз?</p>
          <button onClick={onResetGame} className="button result-button" type="button">Новая игра</button>
        </section>
    );
};

export default ResultsPage;