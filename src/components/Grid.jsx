import { CONFIG } from "../utils/config";
import Card from "./Card";
import "../styles/Grid.css";

export default function Grid() {
  return (
    <div className="grid">
      {CONFIG.CARDS.map((card) => {
        return <Card key={card.key} name={card.name} />;
      })}
    </div>
  );
}
