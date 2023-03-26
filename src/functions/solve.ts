import properties, { Cube, Side } from "../../properties";
import f2l from "../algs/cfop/f2l";
import solveOLL, { ollSolved } from "../algs/cfop/oll";
import solvePLL, { pllSolved } from "../algs/cfop/pll";
import whiteCorners, { whiteCornersSolved } from "../algs/cfop/whiteCorners";
import { whiteCross, whiteCrossSolved } from "../algs/cfop/whiteCross";
import { u } from "../helpers/getMoves";
import simulateTurn from "./simulateTurn";

export default async function solve(cube: Cube) {
  const sequence = [] as any;
  let cubeCopy = cube;

  cubeCopy = await doTask(cubeCopy, whiteCrossSolved, whiteCross, sequence, "White Cross");
  cubeCopy = await doTask(cubeCopy, whiteCornersSolved, whiteCorners, sequence, "White Corners");
  cubeCopy = await doTask(cubeCopy, () => false, f2l, sequence, "F2L");
  cubeCopy = await doTask(cubeCopy, ollSolved, solveOLL, sequence, "OLL");
  cubeCopy = await doTask(cubeCopy, pllSolved, solvePLL, sequence, "PLL");
  cubeCopy = await doTask(cubeCopy, isSolved, () => [u], sequence, "Last Layer");

  return sequence;
}

async function doTask(cube: Cube, solveState: Function, task: Function, sequence: any[], name?: string) {
  console.log("Solving: " + name);

  let count = 0;
  while (!solveState(cube)) {
    const s = task(cube, count);
    if (!s.length) break;

    sequence.push(...s);
    cube = await simulateTurn(cube, s);

    count++;

    if (count > 10) break;
  }

  return cube;
}

function isSolved(cube: Cube) {
  const sides = ["front", "back", "left", "right", "top", "bottom"] as Side[];
  for (const side of sides) {
    for (let i = 0; i < properties.dimensions; i++) {
      for (let j = 0; j < properties.dimensions; j++) {
        if (cube[side][i][j] !== cube[side][1][1]) return false;
      }
    }
  }

  return true;
}

// Things to note
// The middle of the cube can never change color (assuming the cube is odd dimensions)

export function isCorner(i: number, j: number) {
  const { dimensions } = properties;

  if (i === 0 && j === 0) return true;
  if (i === 0 && j === dimensions - 1) return true;
  if (i === dimensions - 1 && j === 0) return true;
  if (i === dimensions - 1 && j === dimensions - 1) return true;

  return false;
}
