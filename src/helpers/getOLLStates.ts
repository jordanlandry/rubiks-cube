import { ollAlgorithms } from "../algs/cfop/oll";
import interpretMoves from "./interpretMoves";
import reverseAlg from "./reverseAlg";

export default function getOLLStates(index: number) {
  return [...reverseAlg(interpretMoves(ollAlgorithms[index].sequence))];
}
