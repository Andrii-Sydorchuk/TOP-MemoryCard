import { KeyboardEventHandler, MouseEventHandler } from "react";
import "../styles/Card.css";

interface CardProps {
  name: string;
  src: string;
  alt: string;
  handleClick: MouseEventHandler<HTMLDivElement>;
  handleKeydown: KeyboardEventHandler<HTMLDivElement>;
}

export default function Card({
  name,
  src,
  alt,
  handleClick,
  handleKeydown,
}: CardProps) {
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
