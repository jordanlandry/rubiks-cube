// Picture this as if white was on the top
// Since the position of the cube can be messed up during each step, we need to make sure that the cube is in the updated state

import properties, { colorToSideMap, Cube } from "../../../properties";
import { b, b2, bp, d, d2, dp, f, f2, fp, l, l2, lp, r, r2, rp, u, u2, up } from "../../helpers/getMoves";
import { getCorrespondingEdgePiece, isCorner } from "../../functions/solve";

export function whiteCrossSolved(cube: Cube) {
  // Check if the white cross is solved
  const top = cube.top;

  const { colors } = properties;
  const whiteSide = colors.findIndex((color) => color.name === "white");

  // Check if each edge piece on the top is white
  if (top[0][1] !== whiteSide) return false;
  if (top[1][2] !== whiteSide) return false;
  if (top[2][1] !== whiteSide) return false;
  if (top[1][0] !== whiteSide) return false;

  // Check if each edge piece lines up with its corresponding edge piece
  if (cube.front[1][2] !== cube.front[1][1]) return false;
  if (cube.right[1][2] !== cube.right[1][1]) return false;
  if (cube.back[1][2] !== cube.back[1][1]) return false;
  if (cube.left[1][2] !== cube.left[1][1]) return false;

  return true;
}

// To do this I'm going to return the moves, then apply them to the cube, and then continue
export function whiteCross(cube: Cube) {
  const sequence = [] as any;

  const { dimensions, colors } = properties;
  const whiteSide = colors.findIndex((color) => color.name === "white");

  // Find white edge pieces

  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      if (isCorner(i, j)) continue;

      // Case 1, edge on bottom layer, white facing down
      if (cube.bottom[i][j] === whiteSide) {
        const edge = getCorrespondingEdgePiece(cube, i, j, "bottom");

        // Turn the bottom layer until the edge is on the correct side
        const targetSide = colorToSideMap[edge.color];

        if (targetSide === "left") {
          if (edge.side === "front") sequence.push(dp);
          if (edge.side === "back") sequence.push(d);
          if (edge.side === "right") sequence.push(d2);
        }

        if (targetSide === "front") {
          if (edge.side === "left") sequence.push(d);
          if (edge.side === "back") sequence.push(d2);
          if (edge.side === "right") sequence.push(dp);
        }

        if (targetSide === "right") {
          if (edge.side === "left") sequence.push(d2);
          if (edge.side === "back") sequence.push(dp);
          if (edge.side === "front") sequence.push(d);
        }

        if (targetSide === "back") {
          if (edge.side === "left") sequence.push(dp);
          if (edge.side === "right") sequence.push(d);
          if (edge.side === "front") sequence.push(d2);
        }

        // Now that the edge is on the correct side, we can move it to the top layer
        if (targetSide === "back") sequence.push(b2);
        if (targetSide === "left") sequence.push(l2);
        if (targetSide === "front") sequence.push(f2);
        if (targetSide === "right") sequence.push(r2);

        if (sequence.length) return sequence;
      }
    }
  }

  // Case 2, edge on bottom layer, white not facing down
  // All of these algorithms work the same with just different starting positions,
  // And unfortunately it's extremely difficult to generalize them and would require many confusing if statements
  // So since there aren't that many cases, I'm just going to write them out as they are not very complicated

  if (cube.front[1][0] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 0, "front");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "front") sequence.push(...[f, u, lp, up]);
    if (targetSide === "left") sequence.push(...[dp, lp, up, f, u]);
    if (targetSide === "back") sequence.push(...[d, u, rp, up, b]);
    if (targetSide === "right") sequence.push(...[u, fp, up, r]);

    if (sequence.length) return sequence;
  }

  if (cube.right[1][0] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 0, "right");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "right") sequence.push(...[r, u, fp, up]);
    if (targetSide === "front") sequence.push(...[dp, fp, up, r, u]);
    if (targetSide === "back") sequence.push(...[up, rp, u, b]);
    if (targetSide === "left") sequence.push(...[dp, up, f, u, l]);

    if (sequence.length) return sequence;
  }

  if (cube.left[1][0] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 0, "left");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "left") sequence.push(...[l, up, f, up]);
    if (targetSide === "front") sequence.push(...[u, lp, up, f]);
    if (targetSide === "right") sequence.push(...[d, f, r, fp]);
    if (targetSide === "back") sequence.push(...[l, bp, lp]);

    if (sequence.length) return sequence;
  }

  if (cube.back[1][0] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 0, "back");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "back") sequence.push(...[b, u, rp, up]);
    if (targetSide === "right") sequence.push(...[u, b2, up]);
    if (targetSide === "left") sequence.push(...[bp, l, b]);
    if (targetSide === "front") sequence.push(...[dp, r, fp, rp]);

    if (sequence.length) return sequence;
  }

  // --------------------------------------------------------------
  // Case 3, white in the middle layer (8 possible positions)
  if (cube.front[0][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 0, 1, "front");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "front") sequence.push(...[u, lp, up]);
    if (targetSide === "left") sequence.push(...[lp]);
    if (targetSide === "back") sequence.push(...[up, lp, u]);
    if (targetSide === "right") sequence.push(...[u2, lp, u2]);

    if (sequence.length) return sequence;
  }

  if (cube.front[2][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 2, 1, "front");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "front") sequence.push(...[up, r, u]);
    if (targetSide === "right") sequence.push(...[r]);
    if (targetSide === "back") sequence.push(...[u, r, up]);
    if (targetSide === "left") sequence.push(...[u2, r, u2]);

    if (sequence.length) return sequence;
  }

  if (cube.right[0][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 0, 1, "right");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "right") sequence.push(...[u, fp, up]);
    if (targetSide === "front") sequence.push(...[fp]);
    if (targetSide === "back") sequence.push(...[u2, fp, u2]);
    if (targetSide === "left") sequence.push(...[up, fp, u]);

    if (sequence.length) return sequence;
  }

  if (cube.right[2][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 2, 1, "right");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "right") sequence.push(...[up, b, u]);
    if (targetSide === "back") sequence.push(...[b]);
    if (targetSide === "left") sequence.push(...[u, b, up]);
    if (targetSide === "front") sequence.push(...[u2, b, u2]);

    if (sequence.length) return sequence;
  }

  if (cube.left[0][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 0, 1, "left");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "left") sequence.push(...[u, bp, up]);
    if (targetSide === "back") sequence.push(...[bp]);
    if (targetSide === "front") sequence.push(...[u2, bp, u2]);
    if (targetSide === "right") sequence.push(...[up, bp, u]);

    if (sequence.length) return sequence;
  }

  if (cube.left[2][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 2, 1, "left");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "left") sequence.push(...[up, f, u]);
    if (targetSide === "front") sequence.push(...[f]);
    if (targetSide === "back") sequence.push(...[u2, f, u2]);
    if (targetSide === "right") sequence.push(...[u, f, up]);

    if (sequence.length) return sequence;
  }

  if (cube.back[0][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 0, 1, "back");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "back") sequence.push(...[u, rp, up]);
    if (targetSide === "right") sequence.push(...[rp]);
    if (targetSide === "left") sequence.push(...[u2, rp, u2]);
    if (targetSide === "front") sequence.push(...[up, rp, u]);

    if (sequence.length) return sequence;
  }

  if (cube.back[2][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 2, 1, "back");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "back") sequence.push(...[up, l, u]);
    if (targetSide === "left") sequence.push(...[l]);
    if (targetSide === "right") sequence.push(...[u2, l, u2]);
    if (targetSide === "front") sequence.push(...[u, l, up]);

    if (sequence.length) return sequence;
  }

  // Case 4, white on white side, not connected to the middle layer (4 possible positions)

  // Front side
  if (cube.top[1][0] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 0, "top");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "left") sequence.push(...[f, up, fp, u]);
    if (targetSide === "back") sequence.push(...[f, u2, fp, u2]);
    if (targetSide === "right") sequence.push(...[f, u, fp, up]);

    if (sequence.length) return sequence;
  }

  // Right side
  if (cube.top[2][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 2, 1, "top");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "front") sequence.push(...[rp, up, r, u]);
    if (targetSide === "back") sequence.push(...[rp, u, r, up]);
    if (targetSide === "left") sequence.push(...[r, u2, rp, u2]);

    if (sequence.length) return sequence;
  }

  // Back side
  if (cube.top[1][2] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 2, "top");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "right") sequence.push(...[b, up, bp, u]);
    if (targetSide === "front") sequence.push(...[b, u2, bp, u2]);
    if (targetSide === "left") sequence.push(...[b, u, bp, up]);

    if (sequence.length) return sequence;
  }

  // Left side
  if (cube.top[0][1] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 0, 1, "top");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "back") sequence.push(...[lp, up, l, u]);
    if (targetSide === "front") sequence.push(...[lp, u, l, up]);
    if (targetSide === "right") sequence.push(...[l, u2, lp, u2]);

    if (sequence.length) return sequence;
  }

  // Case 5, white edge on top layer but white is not connected to the white side (4 possible positions)

  // Front side
  if (cube.front[1][2] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 2, "front");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "right") sequence.push(...[f, r]);
    if (targetSide === "back") sequence.push(...[f, u, r, up]);
    if (targetSide === "left") sequence.push(...[fp, lp]);
    if (targetSide === "front") sequence.push(...[f, up, r, u]);

    if (sequence.length) return sequence;
  }

  // Right side
  if (cube.right[1][2] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 2, "right");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "back") sequence.push(...[r, b]);
    if (targetSide === "left") sequence.push(...[r, u, b, up]);
    if (targetSide === "front") sequence.push(...[rp, fp]);
    if (targetSide === "right") sequence.push(...[r, up, b, u]);

    if (sequence.length) return sequence;
  }

  // Back side
  if (cube.back[1][2] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 2, "back");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "left") sequence.push(...[b, l]);
    if (targetSide === "front") sequence.push(...[b, u, l, up]);
    if (targetSide === "right") sequence.push(...[bp, rp]);
    if (targetSide === "back") sequence.push(...[b, up, l, u]);

    if (sequence.length) return sequence;
  }

  // Left side

  if (cube.left[1][2] === whiteSide) {
    const edge = getCorrespondingEdgePiece(cube, 1, 2, "left");
    const targetSide = colorToSideMap[edge.color];

    if (targetSide === "front") sequence.push(...[l, f]);
    if (targetSide === "right") sequence.push(...[l, u, f, up]);
    if (targetSide === "back") sequence.push(...[lp, bp]);
    if (targetSide === "left") sequence.push(...[l, up, f, u]);

    if (sequence.length) return sequence;
  }

  return [];
}
