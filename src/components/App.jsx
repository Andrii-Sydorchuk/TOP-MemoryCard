import "../styles/App.css";

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-top">
          <h1 className="title">Memory Card Game</h1>

          <div className="score-box">
            <p className="score">Score: 0</p>
            <p className="best-score">Best score: 0</p>
          </div>
        </div>
        <p className="header-rules">
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </header>

      <main className="main">
        <div className="grid">
          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
              <figcaption className="card-caption">Caption Example</figcaption>
            </figure>
          </div>

          <div className="card">
            <figure className="card-figure">
              <img src="" alt="" className="card-img" />
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
