import properties, { Cube, Side } from "../../../properties";
import { b, bp, d, d2, dp, f, fp, l, lp, r, rp } from "../../helpers/getMoves";

type WhiteCorners = "gr" | "go" | "rb" | "bo" | "";

export function whiteCornersSolved(cube: Cube) {
  const { dimensions } = properties;
  const { colors } = properties;

  const white = colors.findIndex((color) => color.name === "white");

  // Check if the top side is solved
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      if (cube.top[i][j] !== white) return false;
    }
  }

  // Check around the cube to see if the corners and edges line up
  const sides = ["left", "right", "front", "back"] as Side[];
  for (const side of sides) {
    if (cube[side][0][2] !== cube[side][1][1]) return false;
    if (cube[side][2][2] !== cube[side][1][1]) return false;
  }

  return true;
}

function getCornerTarget(corner: number[]): WhiteCorners {
  const { colors } = properties;

  const red = colors.findIndex((color) => color.name === "red");
  const orange = colors.findIndex((color) => color.name === "orange");
  const green = colors.findIndex((color) => color.name === "green");
  const blue = colors.findIndex((color) => color.name === "blue");

  if (corner.includes(green) && corner.includes(red)) return "gr";
  if (corner.includes(green) && corner.includes(orange)) return "go";
  if (corner.includes(red) && corner.includes(blue)) return "rb";
  if (corner.includes(blue) && corner.includes(orange)) return "bo";

  return "";
}

// function cornerSolved(cube: Cube, i: number, j: number, side: Side) {
//   const corner = getCorrespondingCornerPiece(cube, i, j, side);
//   const target = getCornerTarget(corner);

//   if (target === "gr") return cube.front[2][2] === cube.front[1][1] && cube.right[0][2] === cube.right[1][1];
//   if (target === "go") return cube.front[0][2] === cube.front[1][1] && cube.left[2][2] === cube.left[1][1];
//   if (target === "rb") return cube.right[2][2] === cube.right[1][1] && cube.back[0][2] === cube.back[1][1];
//   if (target === "bo") return cube.back[2][2] === cube.back[1][1] && cube.left[0][2] === cube.left[1][1];

//   return false;
// }

// Gives me the color of the corner
function getCorrespondingCornerPiece(cube: Cube, i: number, j: number, side: Side) {
  if (side === "bottom") {
    if (i === 0 && j === 0) return [cube.left[0][0], cube.back[2][0]];
    if (i === 0 && j === 2) return [cube.left[2][0], cube.front[0][0]];
    if (i === 2 && j === 0) return [cube.right[2][0], cube.back[0][0]];
    if (i === 2 && j === 2) return [cube.right[0][0], cube.front[2][0]];
  }

  if (side === "top") {
    if (i === 0 && j === 0) return [cube.front[0][2], cube.left[2][2]];
    if (i === 0 && j === 2) return [cube.back[2][2], cube.left[0][2]];
    if (i === 2 && j === 0) return [cube.front[2][2], cube.right[0][2]];
    if (i === 2 && j === 2) return [cube.back[0][2], cube.right[2][2]];
  }

  if (side === "front") {
    if (i === 0 && j === 0) return [cube.bottom[0][2], cube.left[2][0]];
    if (i === 0 && j === 2) return [cube.top[0][0], cube.left[2][2]];
    if (i === 2 && j === 0) return [cube.bottom[2][2], cube.right[0][0]];
    if (i === 2 && j === 2) return [cube.top[2][0], cube.right[0][2]];
  }

  if (side === "back") {
    if (i === 0 && j === 0) return [cube.bottom[2][0], cube.right[2][0]];
    if (i === 0 && j === 2) return [cube.top[2][2], cube.right[2][2]];
    if (i === 2 && j === 0) return [cube.bottom[0][0], cube.left[0][0]];
    if (i === 2 && j === 2) return [cube.top[0][2], cube.left[0][2]];
  }

  if (side === "left") {
    if (i === 0 && j === 0) return [cube.bottom[0][0], cube.back[2][0]];
    if (i === 0 && j === 2) return [cube.top[0][2], cube.back[2][2]];
    if (i === 2 && j === 0) return [cube.bottom[0][2], cube.front[0][0]];
    if (i === 2 && j === 2) return [cube.top[0][0], cube.front[0][2]];
  }

  if (side === "right") {
    if (i === 0 && j === 0) return [cube.bottom[2][2], cube.front[2][0]];
    if (i === 0 && j === 2) return [cube.top[2][0], cube.front[2][2]];
    if (i === 2 && j === 0) return [cube.bottom[2][0], cube.back[0][0]];
    if (i === 2 && j === 2) return [cube.top[2][2], cube.back[0][2]];
  }

  return [] as number[];
}

// Base algorithms for each corner piece when it is under it's target position
type Case = { [key in WhiteCorners]: any };
const case1 = {
  gr: [rp, d2, r, d, rp, dp, r],
  go: [fp, d2, f, d, fp, dp, f],
  rb: [r, d2, rp, dp, r, d, rp],
  bo: [lp, d2, l, d, lp, dp, l],
} as Case;

export default function whiteCorners(cube: Cube) {
  const white = properties.colors.findIndex((color) => color.name === "white");

  // I expirimented with other functions that would calculate the distance
  // and then use that to determine the number of D moves to do,
  // However, there were many edge cases that caused different issues
  // And this way is a lot more straight forward and easier to debug and understand

  // Case 1: Corner on bottom layer, white facing down
  if (cube.bottom[0][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 0, "bottom");
    const target = getCornerTarget(corner);

    if (target === "gr") return [d2, ...case1[target]];
    if (target === "go") return [d, ...case1[target]];
    if (target === "rb") return [dp, ...case1[target]];
    if (target === "bo") return [...case1[target]];
  }

  if (cube.bottom[0][2] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 2, "bottom");
    const target = getCornerTarget(corner);

    if (target === "gr") return [d, ...case1[target]];
    if (target === "go") return [...case1[target]];
    if (target === "rb") return [d2, ...case1[target]];
    if (target === "bo") return [dp, ...case1[target]];
  }

  if (cube.bottom[2][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 0, "bottom");
    const target = getCornerTarget(corner);

    if (target === "gr") return [dp, ...case1[target]];
    if (target === "go") return [d2, ...case1[target]];
    if (target === "rb") return [...case1[target]];
    if (target === "bo") return [d, ...case1[target]];
  }

  if (cube.bottom[2][2] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 2, "bottom");
    const target = getCornerTarget(corner);

    if (target === "gr") return [...case1[target]];
    if (target === "go") return [d2, ...case1[target]];
    if (target === "rb") return [d, ...case1[target]];
    if (target === "bo") return [d, ...case1[target]];
  }

  // Case 2: Corner on bottom layer, white facing forward

  // Front
  if (cube.front[0][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 0, "front");
    const target = getCornerTarget(corner);

    if (target === "gr") return [d, rp, dp, r];
    if (target === "go") return [fp, dp, f];
    if (target === "rb") return [dp, rp, dp, r];
    if (target === "bo") return [b, dp, bp];
  }

  if (cube.front[2][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 0, "front");
    const target = getCornerTarget(corner);

    if (target === "gr") return [dp, rp, d, r];
    if (target === "go") return [d2, fp, d, f];
    if (target === "rb") return [bp, d, b];
    if (target === "bo") return [d, lp, d, l];
  }

  // Right
  if (cube.right[0][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 0, "right");
    const target = getCornerTarget(corner);

    if (target === "gr") return [rp, dp, r];
    if (target === "go") return [l, dp, lp];
    if (target === "rb") return [d2, r, dp, rp];
    if (target === "bo") return [b, d2, bp];
  }

  if (cube.right[2][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 0, "right");
    const target = getCornerTarget(corner);

    if (target === "gr") return [d2, rp, d, r];
    if (target === "go") return [d2, l, d, lp];
    if (target === "rb") return [dp, bp, d, b];
    if (target === "bo") return [lp, d, l];
  }

  // Back
  if (cube.back[0][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 0, "back");
    const target = getCornerTarget(corner);

    if (target === "gr") return [f, dp, fp];
    if (target === "go") return [l, d2, lp];
    if (target === "rb") return [d, r, dp, rp];
    if (target === "bo") return [d2, b, dp, bp];
  }

  if (cube.back[2][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 0, "back");
    const target = getCornerTarget(corner);

    if (target === "gr") return [rp, d2, r];
    if (target === "go") return [fp, d, f];
    if (target === "rb") return [dp, r, d, rp];
    if (target === "bo") return [dp, l, d, lp];
  }

  // Left
  if (cube.left[0][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 0, 0, "left");
    const target = getCornerTarget(corner);

    if (target === "gr") return [d2, rp, dp, r];
    if (target === "go") return [d, fp, dp, f];
    if (target === "rb") return [r, dp, rp];
    if (target === "bo") return [lp, dp, l];
  }

  if (cube.left[2][0] === white) {
    const corner = getCorrespondingCornerPiece(cube, 2, 0, "left");
    const target = getCornerTarget(corner);

    if (target === "gr") return [rp, d, r];
    if (target === "go") return [dp, fp, d, f];
    if (target === "rb") return [bp, d2, b];
    if (target === "bo") return [d2, lp, d, l];
  }

  // For cases 3, and 4, we can just convert it to case 1 or 2, as the next call will handle it.
  // Case 3: Corner on correct layer, white not facing the correct way
  if (cube.front[0][2] === white) return [fp, dp, f];
  if (cube.front[2][2] === white) return [rp, dp, r];
  if (cube.right[0][2] === white) return [rp, dp, r];
  if (cube.right[2][2] === white) return [bp, dp, b];
  if (cube.back[0][2] === white) return [bp, dp, b];
  if (cube.back[2][2] === white) return [lp, dp, l];
  if (cube.left[0][2] === white) return [lp, dp, l];
  if (cube.left[2][2] === white) return [fp, dp, f];

  // Case 4: Corner on correct layer, white is facing the correct way, but the corner is in the wrong place
  // It is very important that this function is called last because then I won't need to check if the corner is solved.
  // This is because the function will only ever reach this point when the top isn't solved and there are no other cases.

  if (cube.top[0][0] === white) return [l, dp, lp];
  if (cube.top[2][0] === white) return [rp, dp, r];
  if (cube.top[0][2] === white) return [lp, dp, l];
  if (cube.top[2][2] === white) return [r, dp, rp];

  return [];
}
