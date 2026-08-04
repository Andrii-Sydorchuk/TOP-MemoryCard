export function shuffleCards(cards) {
  const shuffledIndices = generateShuffledIndices(cards);

  return cards.map((card, index) => {
    const shuffledIndex = shuffledIndices[index];

    return cards[shuffledIndex];
  });
}

function generateShuffledIndices(cards) {
  const indices = [];

  do {
    const index = Math.floor(Math.random() * cards.length);

    if (!indices.includes(index)) indices.push(index);
  } while (indices.length < cards.length);

  return indices;
}
