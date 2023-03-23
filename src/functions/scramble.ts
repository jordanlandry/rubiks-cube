import { Move, validTurns } from "../../properties";

export default function scramble(length = 24) {
  const sequence = [] as Move[];

  for (let i = 0; i < length; i++) {
    const move = validTurns[Math.floor(Math.random() * 6)];

    const inverted = Math.random() > 0.5;
    sequence.push({ move, inverted });
  }

  return sequence;
}
