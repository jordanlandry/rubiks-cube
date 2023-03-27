export default function interpretMoves(moves: any) {
  const sequence = [] as any;

  moves.forEach((move: any) => {
    if (move) sequence.push(...move());
  });

  return sequence;
}
