import { CONFIG } from "../utils/config";
import Card from "./Card";
import "../styles/Grid.css";
import { useState } from "react";
import { shuffleCards } from "../utils/shuffle";
import { useEffect } from "react";

import { createClient } from "pexels";

export default function Grid({
  scoreState,
  bestScoreState,
  setIsGameOver,
  setLastScore,
}) {
  const [score, setScore] = scoreState;
  const [bestScore, setBestScore] = bestScoreState;
  const [clickedCards, setClickedCards] = useState([]);
  const [cards, setCards] = useState(CONFIG.CARDS);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const client = createClient(
      "6tGQj5JGBsl5nMpOtqpHhXCDklK7GRHqWJdjWcie2aWDW5h9pQgsMxuB",
    );

    async function fetchCards() {
      const updatedCards = await Promise.all(
        CONFIG.CARDS.map(async (card) => {
          const result = await client.photos.search({
            query: card.name,
            per_page: 1,
            orientation: "landscape",
          });

          const photo = result.photos[0];

          return {
            ...card,
            src: photo.src.original,
            alt: photo.alt,
          };
        }),
      );

      setCards(updatedCards);
      setIsLoaded(true);
    }

    fetchCards();
  }, []);

  function handleClick(key) {
    const isClicked = clickedCards.includes(key);

    if (isClicked) {
      if (score > bestScore) setBestScore(score);
      setLastScore(score);
      setIsGameOver(true);
      setScore(0);
      setClickedCards([]);

      return;
    }

    const newScore = score + 1;

    setScore(newScore);
    setClickedCards([...clickedCards, key]);
    setCards(shuffleCards(cards));

    if (newScore === CONFIG.CARDS.length) {
      if (newScore > bestScore) setBestScore(newScore);

      setLastScore(newScore);
      setIsGameOver(true);
    }
  }

  function handleKeydown(e, key) {
    if (e.code !== "Enter" && e.code !== "Space") return;

    e.target.blur();
    handleClick(key);
  }

  return (
    <>
      {!isLoaded && <div className="loading-circle"></div>}
      {isLoaded && (
        <div className="grid">
          {cards.map((card) => {
            return (
              <Card
                key={card.key}
                name={card.name}
                src={card.src}
                alt={card.alt}
                handleClick={() => handleClick(card.key)}
                handleKeydown={(e) => handleKeydown(e, card.key)}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
