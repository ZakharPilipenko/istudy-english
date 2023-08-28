import React from "react";

const Card = ({ item, isVisible, isFinished, onCardClick }) => {
  const { id, url, audio, description } = item;
  const className = `${isVisible ? "card-show" : ""} ${isFinished ? "card-finished" : ""}`;

  const playAudio = (audio) => {
    const sound = new Audio(audio);
    sound.play();
  };

  const handleClick = () => {
    playAudio(audio);
    onCardClick(id);
  };
  return (
    <li onClick={handleClick} className={`card ${className}`}>
      <img width="204" height="144" src={url} alt={description} />
    </li>
  );
};

export default Card;
