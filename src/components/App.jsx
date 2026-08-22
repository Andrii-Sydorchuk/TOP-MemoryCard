import { useState } from "react";
import Header from "./Header";
import Grid from "./Grid";
import GameOver from "./GameOver";
import "../styles/App.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [lastScore, setLastScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function handleGameOver(finalScore) {
    if (finalScore > bestScore) setBestScore(finalScore);
    setLastScore(finalScore);
    setIsGameOver(true);
    setScore(0);
  }

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />

      <main className="main">
        {isGameOver ? (
          <GameOver lastScore={lastScore} setIsGameOver={setIsGameOver} />
        ) : (
          <Grid
            score={score}
            setScore={setScore}
            handleGameOver={handleGameOver}
          />
        )}
      </main>

      <footer className="footer">
        <p className="footer-credit">
          Photos provided by
          <a href="https://www.pexels.com/" target="_blank">
            Pexels
          </a>
        </p>
      </footer>
    </div>
  );
}
