import { Cube } from "../../properties";
import { b, b2, bp, d, d2, dp, f, f2, fp, l, l2, lp, r, r2, rp, u, u2, up } from "../helpers/getMoves";

export default async function whiteCorners(cube: Cube) {
  // Case 1: Corner on bottom layer, white facing down
  // Case 2: Corner on bottom layer, white facing forward
  // Case 3: Corner on correct layer, white is facing the correct way, but the corner is in the wrong place
  // Case 4: Corner on correct layer, white not facing the correct way
}
