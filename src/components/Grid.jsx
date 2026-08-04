import { CONFIG } from "../utils/config";
import Card from "./Card";
import "../styles/Grid.css";
import { useState } from "react";
import { shuffleCards } from "../utils/shuffle";

export default function Grid({ scoreState, bestScoreState }) {
  const [score, setScore] = scoreState;
  const [bestScore, setBestScore] = bestScoreState;
  const [clickedCards, setClickedCards] = useState([]);

  const cards = shuffleCards(CONFIG.CARDS);

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
      {cards.map((card) => {
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
