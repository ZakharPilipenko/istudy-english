import { useState } from "react";

export const useGame = (cards) => {
  const [finishedItems, setFinishedItems] = useState([]);
  const [stepsCount, setStepsCount] = useState(0);

  const checkItems = (firstItem, secondItem) => {
    const firstImage = cards.find(({ id }) => id === firstItem);
    const secondImage = cards.find(({ id }) => id === secondItem);
    if (firstImage.cardType === secondImage.cardType) {
      return;
    }
    if (firstImage.token === secondImage.token) {
      setFinishedItems((items) => [...items, firstItem, secondItem]);
    }

    setStepsCount((i) => i + 1);
  };

  const isWin =
    finishedItems.length > 0 && finishedItems.length === cards.length;
  return {
    finishedItems,
    stepsCount,
    checkItems,
    isWin,
  };
};
