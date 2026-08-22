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

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />

      <main className="main">
        {isGameOver ? (
          <GameOver lastScore={lastScore} setIsGameOver={setIsGameOver} />
        ) : (
          <Grid
            scoreState={[score, setScore]}
            bestScoreState={[bestScore, setBestScore]}
            setIsGameOver={setIsGameOver}
            setLastScore={setLastScore}
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
