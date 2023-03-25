import { Move, validTurns } from "../../properties";

export default function scramble(length = 24) {
  const sequence = [] as Move[];

  for (let i = 0; i < length; i++) {
    const move = validTurns[Math.floor(Math.random() * validTurns.length)];

    // Skip m moves because they will mess up the centers and are only used for OLL and PLL
    if (move === "m") {
      i--;
      continue;
    }

    const inverted = Math.random() > 0.5;
    sequence.push({ move, inverted });
  }

  return sequence;
}
