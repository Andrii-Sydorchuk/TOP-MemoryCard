import { Card } from "../types";

const cars = [
  "Ferrari F40",
  "Lamborghini Countach",
  "Porsche 911",
  "Toyota Supra MK4",
  "Nissan Skyline GT-R R34",
  "Mazda RX-7",
  "Chevrolet Camaro",
  "BMW M3",
  "Audi R8",
];

export const CONFIG = {
  CARDS: cars.map((car) => {
    const card: Card = {
      name: car,
      key: crypto.randomUUID(),
    };

    return card;
  }),
};
