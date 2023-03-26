import { Cube, Side } from "../../../properties";
import { b, d, dp, f, fp, m, m2, mp, r, r2, rp, u, u2, up } from "../../helpers/getMoves";

// All algorithms were found on https://jperm.net/algs/pll

// prettier-ignore
type AlgName = | "Aa" | "Ab" | "F" | "Ga" | "Gb" | "Gc" | "Gd" | "Ja" | "Jb" | "Ra" | "Rb" | "T" | "E" | "Na" | "Nb" | "V" | "Y" | "H" | "Ua" | "Ub" | "Z";
type Alg = {
  name: AlgName;
  sequence: any;
};

export const pllAlgorithms = [
  { name: "Aa", sequence: [] },
  { name: "Ab", sequence: [] },
  { name: "F", sequence: [rp, up, fp, r, u, rp, up, rp, f, r2, up, rp, up, r, u, rp, u, r] },
  { name: "Ga", sequence: [r2, u, rp, u, rp, up, r, up, r2, up, d, rp, u, r, dp] },
  { name: "Gb", sequence: [rp, up, r, u, dp, r2, u, rp, u, r, up, r, up, r2, d] },
  { name: "Gc", sequence: [r2, up, r, up, r, u, rp, u, r2, u, dp, r, up, rp, d] },
  { name: "Gd", sequence: [r, u, rp, up, d, r2, up, r, up, rp, u, rp, u, r2, dp] },
  { name: "Ja", sequence: [] },
  { name: "Jb", sequence: [r, u, rp, fp, r, u, rp, up, rp, f, r2, up, rp] },
  { name: "Ra", sequence: [r, up, rp, up, r, u, r, d, rp, up, r, dp, rp, u2, rp] },
  { name: "Rb", sequence: [r2, f, r, u, r, up, rp, fp, r, u2, rp, u2, r] },
  { name: "T", sequence: [r, u, rp, up, rp, f, r2, up, rp, up, r, u, rp, fp] },
  { name: "E", sequence: [] },
  { name: "Na", sequence: [r, u, rp, u, r, u, rp, fp, r, u, rp, up, rp, f, r2, up, rp, u2, r, up, rp] },
  { name: "Nb", sequence: [rp, u, r, up, rp, fp, up, f, r, u, rp, f, rp, fp, r, up, r] },
  { name: "V", sequence: [] },
  { name: "Y", sequence: [f, r, up, rp, up, r, u, rp, fp, r, u, rp, up, rp, f, r, fp] },
  { name: "H", sequence: [m2, u, m2, u2, m2, u, m2] },
  { name: "Ua", sequence: [m2, u, m, u2, mp, u, m2] },
  { name: "Ub", sequence: [m2, up, , m, u2, mp, up, m2] },
  { name: "Z", sequence: [mp, u, m2, u, m2, u, mp, u2, m2] },
] as Alg[];

export function pllSolved(cube: Cube) {
  const sides = ["front", "right", "back", "left"] as Side[];
  const coords = [
    [0, 2],
    [1, 2],
    [2, 2],
  ];

  for (let i = 0; i < sides.length; i++) {
    const side = sides[i];
    const nextSide = sides[(i + 1) % sides.length];

    for (let j = 0; j < coords.length; j++) {
      const [x, y] = coords[j];
      const nextCoord = coords[(j + 1) % coords.length];

      if (cube[side][x][y] !== cube[nextSide][nextCoord[0]][nextCoord[1]]) return false;
    }
  }

  return true;
}

function identifyAlg(cube: Cube): AlgName {
  return "T";
}

export default function solvePLL(cube: Cube) {
  const tPerm = pllAlgorithms.find((alg) => alg.name === "T")!;

  return tPerm.sequence;
}
