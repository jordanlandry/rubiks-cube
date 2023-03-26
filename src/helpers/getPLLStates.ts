import { pllAlgorithms } from "../algs/cfop/pll";
import interpretMoves from "./interpretMoves";
import reverseAlg from "./reverseAlg";

export default function getPLLStates(index: number) {
  return [...reverseAlg(interpretMoves(pllAlgorithms[index].sequence))];
}
