import { Cube, Side } from "../../../properties";
import { getColorIndex } from "../../helpers/getColorIndex";
import { b, bp, d, d2, dp, f, fp, l, lp, r, rp } from "../../helpers/getMoves";

type Edge = "go" | "gr" | "rb" | "bo";

const algorithms = {
  go: {
    orange: [d, l, dp, lp, dp, fp, d, f],
    green: [dp, fp, d, f, d, l, dp, lp],
  },

  gr: {
    green: [d, f, dp, fp, dp, rp, d, r],
    red: [dp, rp, d, r, d, f, dp, fp],
  },

  rb: {
    red: [d, r, dp, rp, dp, bp, d, b],
    blue: [dp, bp, d, b, d, r, dp, rp],
  },

  bo: {
    blue: [d, b, dp, bp, dp, lp, d, l],
    orange: [dp, lp, d, l, d, b, dp, bp],
  },
} as { [key in Edge]: { [key: string]: any } };

function edgeSolved(cube: Cube, edge: Edge) {
  if (edge === "go") return cube.left[2][1] === cube.left[1][1] && cube.front[0][1] === cube.front[1][1];
  if (edge === "gr") return cube.right[0][1] === cube.right[1][1] && cube.front[2][1] === cube.front[1][1];
  if (edge === "rb") return cube.right[2][1] === cube.right[1][1] && cube.back[0][1] === cube.back[1][1];
  if (edge === "bo") return cube.left[0][1] === cube.left[1][1] && cube.back[2][1] === cube.back[1][1];

  return false;
}

function getOtherEdgeColor(cube: Cube, i: number, j: number, side: Side) {
  if (side === "front") {
    if (i === 1 && j === 0) return cube.bottom[1][2];
    if (i === 0 && j === 1) return cube.left[2][1];
    if (i === 2 && j === 1) return cube.right[0][1];
  }

  if (side === "right") {
    if (i === 1 && j === 0) return cube.bottom[2][1];
    if (i === 0 && j === 1) return cube.left[2][1];
    if (i === 2 && j === 1) return cube.back[0][1];
  }

  if (side === "back") {
    if (i === 1 && j === 0) return cube.bottom[1][0];
    if (i === 0 && j === 1) return cube.right[2][1];
    if (i === 2 && j === 1) return cube.left[0][1];
  }

  if (side === "left") {
    if (i === 1 && j === 0) return cube.bottom[0][1];
    if (i === 0 && j === 1) return cube.front[2][1];
    if (i === 2 && j === 1) return cube.back[0][1];
  }

  // The rest have 3 and this has 4 because the missing side on the others, is the solved side
  if (side === "bottom") {
    if (i === 1 && j === 0) return cube.back[1][0];
    if (i === 0 && j === 1) return cube.left[1][0];
    if (i === 2 && j === 1) return cube.right[1][0];
    if (i === 1 && j === 2) return cube.front[1][0];
  }

  return -1;
}

function getEdge(cube: Cube, i: number, j: number, side: Side) {
  const currentColor = cube[side][i][j];
  const otherColor = getOtherEdgeColor(cube, i, j, side);

  const green = getColorIndex("green");
  const orange = getColorIndex("orange");
  const blue = getColorIndex("blue");
  const red = getColorIndex("red");

  const colors = [currentColor, otherColor];

  if (colors.includes(green) && colors.includes(orange)) return "go";
  if (colors.includes(green) && colors.includes(red)) return "gr";
  if (colors.includes(red) && colors.includes(blue)) return "rb";
  if (colors.includes(blue) && colors.includes(orange)) return "bo";

  return "";
}

// Look for a specific edge, and return the side it is on and the position
// function getEdgePosition(cube: Cube, edge: Edge) {
//   const orange = getColorIndex("orange");
//   const green = getColorIndex("green");
//   const red = getColorIndex("red");
//   const blue = getColorIndex("blue");

//   const possiblePositions = [
//     [0, 1],
//     [2, 1],
//     [1, 0],
//   ];

//   const possibleSides = Array.from<Side>(["left", "right", "back", "front"] as const);

//   if (edge === "go") {
//     if (cube.front[0][1] === green && cube.left[2][1] === orange) return { side: "front", position: [0, 1], state: "solved" };
//     if (cube.front[0][1] === orange && cube.left[2][1] === green) return { side: "front", position: [0, 1], state: "flipped" };
//     if (cube.front[1][0] === green && cube.bottom[1][2] === orange) return { side: "front", position: [1, 0], state: "left" };
//     if (cube.front[1][0] === orange && cube.bottom[1][2] === green) return { side: "front", position: [1, 0], state: "right" };

//   }

//   return { side: "bottom", position: [0, 0] };
// }

// function isF2lPiece(cube: Cube, i: number, j: number, side: Side) {
//   return (
//     cube[side][i][j] === cube.front[1][1] ||
//     cube[side][i][j] === cube.back[1][1] ||
//     cube[side][i][j] === cube.left[1][1] ||
//     cube[side][i][j] === cube.right[1][1]
//   );
// }

export default function f2l(cube: Cube) {
  const green = getColorIndex("green");
  const orange = getColorIndex("orange");
  const red = getColorIndex("red");
  const blue = getColorIndex("blue");

  const edgePositions = [
    [0, 1],
    [2, 1],
    [1, 0],
    [1, 2],
  ] as const;

  // Green and orange piece
  if (!edgeSolved(cube, "go")) {
    for (let i = 0; i < edgePositions.length; i++) {
      const [x, y] = edgePositions[i];
      const e = getEdge(cube, x, y, "bottom");

      if (e !== "go") continue;

      if (x === 1 && y === 2) {
        if (cube.bottom[1][2] === green) return [dp, ...algorithms.go.green];
        if (cube.bottom[1][2] === orange) return [...algorithms.go.orange];
      }

      if (x === 2 && y === 1) {
        if (cube.bottom[2][1] === green) return [dp, ...algorithms.go.green];
        if (cube.bottom[2][1] === orange) return [d2, ...algorithms.go.orange];
      }

      if (x === 1 && y === 0) {
        if (cube.bottom[1][0] === green) return [d, ...algorithms.go.green];
        if (cube.bottom[1][0] === orange) return [d2, ...algorithms.go.orange];
      }

      if (x === 0 && y === 1) {
        if (cube.bottom[0][1] === green) return [...algorithms.go.green];
        if (cube.bottom[0][1] === orange) return [d, ...algorithms.go.orange];
      }
    }
  }

  // Green and red piece
  if (!edgeSolved(cube, "gr")) {
    for (let i = 0; i < edgePositions.length; i++) {
      const [x, y] = edgePositions[i];
      const e = getEdge(cube, x, y, "bottom");

      if (e !== "gr") continue;

      if (x === 1 && y === 2) {
        if (cube.bottom[1][2] === green) return [d, ...algorithms.gr.green];
        if (cube.bottom[1][2] === red) return [...algorithms.gr.red];
      }

      if (x === 2 && y === 1) {
        if (cube.bottom[2][1] === green) return [...algorithms.gr.green];
        if (cube.bottom[2][1] === red) return [dp, ...algorithms.gr.red];
      }

      if (x === 1 && y === 0) {
        if (cube.bottom[1][0] === green) return [dp, ...algorithms.gr.green];
        if (cube.bottom[1][0] === red) return [d2, ...algorithms.gr.red];
      }

      if (x === 0 && y === 1) {
        if (cube.bottom[0][1] === green) return [d2, ...algorithms.gr.green];
        if (cube.bottom[0][1] === red) return [d, ...algorithms.gr.red];
      }
    }
  }

  // Red and blue piece
  if (!edgeSolved(cube, "rb")) {
    for (let i = 0; i < edgePositions.length; i++) {
      const [x, y] = edgePositions[i];
      const e = getEdge(cube, x, y, "bottom");

      if (e !== "rb") continue;

      if (x === 1 && y === 2) {
        if (cube.bottom[1][2] === red) return [d2, ...algorithms.rb.red];
        if (cube.bottom[1][2] === blue) return [d, ...algorithms.rb.blue];
      }

      if (x === 2 && y === 1) {
        if (cube.bottom[2][1] === red) return [d, ...algorithms.rb.red];
        if (cube.bottom[2][1] === blue) return [...algorithms.rb.blue];
      }

      if (x === 1 && y === 0) {
        if (cube.bottom[1][0] === red) return [...algorithms.rb.red];
        if (cube.bottom[1][0] === blue) return [dp, ...algorithms.rb.blue];
      }

      if (x === 0 && y === 1) {
        if (cube.bottom[0][1] === red) return [dp, ...algorithms.rb.red];
        if (cube.bottom[0][1] === blue) return [d2, ...algorithms.rb.blue];
      }
    }
  }

  // Blue and orange piece
  if (!edgeSolved(cube, "bo")) {
    for (let i = 0; i < edgePositions.length; i++) {
      const [x, y] = edgePositions[i];
      const e = getEdge(cube, x, y, "bottom");

      if (e !== "bo") continue;

      if (x === 1 && y === 2) {
        if (cube.bottom[1][2] === blue) return [dp, ...algorithms.bo.blue];
        if (cube.bottom[1][2] === orange) return [d2, ...algorithms.bo.orange];
      }

      if (x === 2 && y === 1) {
        if (cube.bottom[2][1] === blue) return [d2, ...algorithms.bo.blue];
        if (cube.bottom[2][1] === orange) return [d, ...algorithms.bo.orange];
      }

      if (x === 1 && y === 0) {
        if (cube.bottom[1][0] === blue) return [d, ...algorithms.bo.blue];
        if (cube.bottom[1][0] === orange) return [...algorithms.bo.orange];
      }

      if (x === 0 && y === 1) {
        if (cube.bottom[0][1] === blue) return [...algorithms.bo.blue];
        if (cube.bottom[0][1] === orange) return [dp, ...algorithms.bo.orange];
      }
    }
  }

  // If it reaches this point, it means that either all edges are solved or
  // there is an edge piece in the middle layer in the wrong place
  // If it's the ladder, we just need to move it to the bottom layer
  // Because when this function is called again, it will handle it as if it was case 1

  return [];
}
