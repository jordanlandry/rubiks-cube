export default function reverseAlg(sequence: any) {
  const reversedSequence = [] as any;

  for (let i = sequence.length - 1; i >= 0; i--) {
    const { move, inverted } = sequence[i];
    reversedSequence.push({ move, inverted: !inverted });
  }

  return reversedSequence;
}
