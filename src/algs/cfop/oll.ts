import { Cube } from "../../../properties";
import { f, f2, fp, r, r2, rp, u, u2, up } from "../../helpers/getMoves";

// All of the OLL algorithms are found from
// https://jperm.net/algs/oll

const ollAlgorithms = {
  1: [r, u2, r2, f, r, fp, u2, rp, f, r, fp],
};

export default function solveOLL(cube: Cube) {}
