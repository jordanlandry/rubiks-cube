import { Cube } from "../../properties";
import deepCopy from "../helpers/deepCopy";
import interpretMoves from "../helpers/interpretMoves";
import turn from "./turn";

// Get the state of the cube after a turn, without actually turning the cube
export default async function simulateTurn(cube: Cube, sequence: any) {
  const cubeCopy = deepCopy(cube);

  const moveSequence = interpretMoves(sequence);
  for (let i = 0; i < moveSequence.length; i++) {
    const { move, inverted } = moveSequence[i];
    await turn(cubeCopy, move, inverted);
  }

  return cubeCopy;
}
