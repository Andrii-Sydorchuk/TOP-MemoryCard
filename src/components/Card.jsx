import "../styles/Card.css";

export default function Card({ name }) {
  return (
    <div className="card">
      <figure className="card-figure">
        <img src={null} alt="" className="card-img" />
        <figcaption className="card-caption">{name}</figcaption>
      </figure>
    </div>
  );
}
