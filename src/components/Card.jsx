import "../styles/Card.css";

export default function Card({ name, src, alt, handleClick, handleKeydown }) {
  return (
    <div
      className="card"
      onClick={handleClick}
      tabIndex={0}
      onKeyDown={handleKeydown}
    >
      <figure className="card-figure">
        <img src={src} alt={alt} className="card-img" />
        <figcaption className="card-caption">{name}</figcaption>
      </figure>
    </div>
  );
}
