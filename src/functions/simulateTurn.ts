import { Cube } from "../../properties";
import deepCopy from "../helpers/deepCopy";
import interpretMoves from "../helpers/interpretMoves";
import turn from "./turn";

export default async function simulateTurn(cube: Cube, sequence: any) {
  const cubeCopy = deepCopy(cube);

  const solveSequence = interpretMoves(sequence);
  for (let i = 0; i < solveSequence.length; i++) {
    const { move, inverted } = solveSequence[i];
    await turn(cubeCopy, move, inverted);
  }

  return cubeCopy;
}
