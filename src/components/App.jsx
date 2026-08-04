import { useState } from "react";

import Header from "./Header";

import "../styles/App.css";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="container">
      <Header score={score} bestScore={bestScore} />

      <main className="main">
        <div className="grid">
          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src={null} alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>
        </div>
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
