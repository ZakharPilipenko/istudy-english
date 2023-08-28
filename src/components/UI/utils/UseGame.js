import { useState } from "react";

export const useGame = (images) => {
    const [finishedItems, setFinishedItems] = useState([]);
    const [stepsCount, setStepsCount] = useState(0);

    const checkItems = (firstItem, secondItem) => {
      const firstImage = images.find(({id}) => id === firstItem);
      const secondImage = images.find(({id}) => id === secondItem);
      if (firstImage.url === secondImage.url) {
        setFinishedItems((items) => [...items, firstItem, secondItem]);
      }
      setStepsCount((i) => i + 1);
    };

    const isWin = finishedItems.length > 0 && finishedItems.length === images.length;
    return {
      finishedItems,
      stepsCount,
      checkItems,
      isWin
    };
  };