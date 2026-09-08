import { CONFIG } from "../utils/config";
import "../styles/Grid.css";
import { useState } from "react";
import { shuffleArray } from "../utils/shuffleArray";
import { useEffect } from "react";
import { createClient } from "pexels";
import { CardItem } from "../types";
import Card from "./Card";

interface GridProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  handleGameOver: (lastScore: number) => void;
}

export default function Grid({ score, setScore, handleGameOver }: GridProps) {
  const [cards, setCards] = useState<CardItem[]>(CONFIG.CARDS);
  const [clickedCards, setClickedCards] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);

    async function fetchCards() {
      const updatedCards: CardItem[] = await Promise.all(
        CONFIG.CARDS.map(async (card) => {
          const result = await client.photos.search({
            query: card.name,
            per_page: 1,
            orientation: "landscape",
          });

          if ("photos" in result && result.photos.length > 0) {
            const photo = result.photos[0];
            return {
              ...card,
              src: photo!.src.original,
              alt: photo!.alt,
            };
          }

          return {
            ...card,
            src: "",
            alt: card.name,
          };
        }),
      );

      setCards(updatedCards);
      setIsLoaded(true);
    }

    fetchCards();
  }, []);

  function handleClick(key: string) {
    if (clickedCards.includes(key)) {
      handleGameOver(score);
      return;
    }

    const newScore = score + 1;

    setScore(newScore);
    setClickedCards([...clickedCards, key]);
    setCards(shuffleArray(cards));

    if (newScore === CONFIG.CARDS.length) {
      handleGameOver(newScore);
    }
  }

  function handleKeydown(e: React.KeyboardEvent<HTMLDivElement>, key: string) {
    if (e.code !== "Enter" && e.code !== "Space") return;

    e.currentTarget.blur();
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
                src={card.src ?? ""}
                alt={card.alt ?? ""}
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
