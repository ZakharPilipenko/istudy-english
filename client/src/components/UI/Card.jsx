import React from 'react';

const Card = ({item, isVisible, isFinished, onCardClick}) => {
  const {image, audio, id} = item;
  console.log(item)
  const className = `${
    isVisible ? 'singleCard-show' : ''
  } ${
    isFinished ? 'singleCard-finished' : ''
  }`;

  const playAudio = (audio) => {
    const sound = new Audio("http://localhost:5000/" + audio);
    sound.play();
  }

  const handleClick = () => {
    playAudio(audio);
    onCardClick(id);
  };
    return (
      <li onClick={handleClick} className={`singleCard ${className}`}>
      <img src={"http://localhost:5000/" + image} width="204" height="144" alt=""/>
      </li>
    );
}

export default Card;