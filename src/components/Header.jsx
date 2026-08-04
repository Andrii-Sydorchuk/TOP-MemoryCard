import "../styles/Header.css";

export default function Header({ score, bestScore }) {
  return (
    <header className="header">
      <div className="header-top">
        <h1 className="title">Memory Card Game</h1>

        <div className="score-box">
          <p className="score">Score: {score}</p>
          <p className="best-score">Best score: {bestScore}</p>
        </div>
      </div>
      <p className="header-rules">
        Get points by clicking on an image but don't click on any more than
        once!
      </p>
    </header>
  );
}
