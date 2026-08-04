import "../styles/Card.css";

export default function Card({ name, src, alt, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <figure className="card-figure">
        <img src={src} alt={alt} className="card-img" />
        <figcaption className="card-caption">{name}</figcaption>
      </figure>
    </div>
  );
}
