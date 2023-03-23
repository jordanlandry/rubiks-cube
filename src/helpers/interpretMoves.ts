export default function interpretMoves(moves: any) {
  const sequence = [] as any;

  moves.forEach((move: any) => {
    sequence.push(...move());
  });

  return sequence;
}
