import React from 'react';

const Card = ({item, isVisible, isFinished, onCardClick}) => {
  const {type, url, audio, id} = item;
  const className = `${
    isVisible ? 'card-show' : ''
  } ${
    isFinished ? 'card-finished' : ''
  }`;

  const playAudio = (audio) => {
    const sound = new Audio(audio);
    sound.play();
  }

  const handleClick = () => {
    playAudio(audio);
    onCardClick(id);
  };
    return (
      <li onClick={handleClick} className={`card ${className}`}>
      <img src={url} width="204" height="144" alt=""/>
      </li>
    );
}

export default Card;