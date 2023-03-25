import properties, { Cube, Side } from "../../properties";
import f2l from "../algs/cfop/f2l";
import whiteCorners, { whiteCornersSolved } from "../algs/cfop/whiteCorners";
import { whiteCross, whiteCrossSolved } from "../algs/cfop/whiteCross";
import simulateTurn from "./simulateTurn";

export default async function solve(cube: Cube) {
  const sequence = [] as any;

  const oneAtATime = false;

  let cubeCopy = cube;
  if (!oneAtATime) {
    while (!whiteCrossSolved(cubeCopy)) {
      const s = whiteCross(cubeCopy);
      if (!s.length) break;

      sequence.push(...s);
      cubeCopy = await simulateTurn(cubeCopy, s);
    }

    while (!whiteCornersSolved(cubeCopy)) {
      const s = whiteCorners(cubeCopy);
      if (!s.length) break;

      sequence.push(...s);
      cubeCopy = await simulateTurn(cubeCopy, s);
    }

    while (true) {
      const s = f2l(cubeCopy);
      if (!s.length) break;

      sequence.push(...s);
      cubeCopy = await simulateTurn(cubeCopy, s);
    }
  }

  // One move at a time
  else {
    if (!whiteCrossSolved(cubeCopy)) {
      const s = whiteCross(cubeCopy);
      if (s.length) sequence.push(...s);
    }

    if (!whiteCornersSolved(cubeCopy)) {
      const s = whiteCorners(cubeCopy);
      if (s.length) sequence.push(...s);
    } else {
      const s = f2l(cubeCopy);

      console.log(s);

      if (s.length) sequence.push(...s);
      cubeCopy = await simulateTurn(cubeCopy, s);
    }

    simulateTurn(cubeCopy, sequence);
  }

  // properties.animationSpeed = 300;

  return sequence;
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

// This function takes an edge piece position, and returns the other color on the other side of that piece
export function getCorrespondingEdgePiece(cube: Cube, i: number, j: number, side: Side) {
  // All of these values were found by adding the i and j to each side

  const result = {
    color: -1,
    side: "" as Side,
  };

  if (side === "bottom") {
    if (i === 0 && j === 1) {
      result.color = cube.left[1][0];
      result.side = "left";
    }

    if (i === 1 && j === 2) {
      result.color = cube.front[1][0];
      result.side = "front";
    }

    if (i === 2 && j === 1) {
      result.color = cube.right[1][0];
      result.side = "right";
    }

    if (i === 1 && j === 0) {
      result.color = cube.back[1][0];
      result.side = "back";
    }
  }

  if (side === "top") {
    if (i === 1 && j === 0) {
      result.color = cube.front[1][2];
      result.side = "front";
    }

    if (i === 2 && j === 1) {
      result.color = cube.right[1][2];
      result.side = "right";
    }

    if (i === 1 && j === 2) {
      result.color = cube.back[1][2];
      result.side = "back";
    }

    if (i === 0 && j === 1) {
      result.color = cube.left[1][2];
      result.side = "left";
    }
  }

  if (side === "left") {
    if (i === 0 && j === 1) {
      result.color = cube.back[2][1];
      result.side = "back";
    }

    if (i === 1 && j === 0) {
      result.color = cube.bottom[0][1];
      result.side = "bottom";
    }

    if (i === 2 && j === 1) {
      result.color = cube.front[0][1];
      result.side = "front";
    }

    if (i === 1 && j === 2) {
      result.color = cube.top[0][1];
      result.side = "top";
    }
  }

  if (side === "right") {
    if (i === 0 && j === 1) {
      result.color = cube.front[2][1];
      result.side = "front";
    }

    if (i === 1 && j === 0) {
      result.color = cube.bottom[2][1];
      result.side = "bottom";
    }

    if (i === 2 && j === 1) {
      result.color = cube.back[0][1];
      result.side = "back";
    }

    if (i === 1 && j === 2) {
      result.color = cube.top[2][1];
      result.side = "top";
    }
  }

  if (side === "front") {
    if (i === 0 && j === 1) {
      result.color = cube.left[2][1];
      result.side = "left";
    }

    if (i === 1 && j === 0) {
      result.color = cube.bottom[1][2];
      result.side = "bottom";
    }

    if (i === 2 && j === 1) {
      result.color = cube.right[0][1];
      result.side = "right";
    }

    if (i === 1 && j === 2) {
      result.color = cube.top[1][0];
      result.side = "top";
    }
  }

  if (side === "back") {
    if (i === 0 && j === 1) {
      result.color = cube.right[2][1];
      result.side = "right";
    }

    if (i === 1 && j === 0) {
      result.color = cube.bottom[1][0];
      result.side = "bottom";
    }

    if (i === 2 && j === 1) {
      result.color = cube.left[0][1];
      result.side = "left";
    }

    if (i === 1 && j === 2) {
      result.color = cube.top[1][2];
      result.side = "top";
    }
  }

  return result;
}
