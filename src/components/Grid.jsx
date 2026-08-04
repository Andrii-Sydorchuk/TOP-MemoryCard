import { CONFIG } from "../utils/config";
import Card from "./Card";
import "../styles/Grid.css";
import { useState } from "react";

export default function Grid({ scoreState, bestScoreState }) {
  const [score, setScore] = scoreState;
  const [bestScore, setBestScore] = bestScoreState;
  const [clickedCards, setClickedCards] = useState([]);

  function handleClick(key) {
    const isClicked = clickedCards.includes(key);

    if (isClicked) {
      if (score > bestScore) setBestScore(score);
      setScore(0);
      setClickedCards([]);

      return;
    }

    setScore(score + 1);
    setClickedCards([...clickedCards, key]);
  }

  return (
    <div className="grid">
      {CONFIG.CARDS.map((card) => {
        return (
          <Card
            key={card.key}
            name={card.name}
            handleClick={() => handleClick(card.key)}
          />
        );
      })}
    </div>
  );
}
