import { useState } from "react";
import Header from "./Header";
import Grid from "./Grid";
import "../styles/App.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />

      <main className="main">
        <Grid
          scoreState={[score, setScore]}
          bestScoreState={[bestScore, setBestScore]}
        />
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
