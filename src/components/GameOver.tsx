import "../styles/GameOver.css";
import { CONFIG } from "../utils/config";

interface GameOverProps {
  lastScore: number;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GameOver({ lastScore, setIsGameOver }: GameOverProps) {
  const won = lastScore === CONFIG.CARDS.length;

  return (
    <div className="gameover-container">
      {won ? (
        <h2 className="gameover-title">Congratulations! You won!</h2>
      ) : (
        <h2 className="gameover-title">Game Over</h2>
      )}
      <p className="gameover-score">Score: {lastScore}</p>
      <button className="restart-btn" onClick={() => setIsGameOver(false)}>
        Restart
      </button>
    </div>
  );
}
