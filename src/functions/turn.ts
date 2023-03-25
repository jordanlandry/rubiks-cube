import properties, { Cube, Turn } from "../../properties";
import deepCopy from "../helpers/deepCopy";
import rotateMatrix from "../helpers/rotateMatrix";

export default async function turn(cube: Cube, turnType: Turn, inverted = false) {
  // Dimensions
  const d = Array.from({ length: properties.dimensions }, (_, i) => i);

  // For certain sides I need to invert some of the values
  // As some of the sides are rotated 90 degrees, so the matrix is also not represented intuitively

  // To turn counter clockwise, we need to turn clockwise 3 times
  // This way the logic stays the same and there's a lot less hardcoding involved
  // Clocksiwse is opposite for opposite sides, so we need to invert the inverted value
  // Sounds weird but trust me ¯\_(ツ)_/¯ lol

  const turnCounts = {
    r: inverted ? 1 : 3,
    l: inverted ? 3 : 1,
    u: inverted ? 3 : 1,
    d: inverted ? 1 : 3,
    f: inverted ? 3 : 1,
    b: inverted ? 3 : 1,
    m: inverted ? 3 : 1,
  } as { [key in Turn]: number };

  const count = turnCounts[turnType];

  for (let _ = 0; _ < count; _++) {
    const bottom = deepCopy(cube.bottom);
    const right = deepCopy(cube.right);
    const left = deepCopy(cube.left);
    const back = deepCopy(cube.back);
    const top = deepCopy(cube.top);

    // TOP AND BOTTOM
    if (turnType === "u" || turnType === "d") {
      const tempSide = deepCopy(cube.front);

      const j = turnType === "d" ? 0 : properties.dimensions - 1;

      d.forEach((i) => {
        cube.front[i][j] = right[i][j];
        cube.right[i][j] = back[i][j];
        cube.back[i][j] = left[i][j];
        cube.left[i][j] = tempSide[i][j];
      });

      if (turnType === "u") cube.top = rotateMatrix(cube.top);
      else if (turnType === "d") cube.bottom = rotateMatrix(cube.bottom, false);
    }

    // LEFT AND RIGHT
    if (turnType === "l" || turnType === "r") {
      const tempSide = deepCopy(cube.front);

      const i = turnType === "l" ? 0 : properties.dimensions - 1;

      // Back side is rotated, so we need a relative index
      const iRel = i === 0 ? properties.dimensions - 1 : 0;

      d.forEach((j) => {
        const jRel = properties.dimensions - 1 - j;

        cube.front[i][j] = top[i][j];
        cube.top[i][j] = back[iRel][jRel];
        cube.back[iRel][jRel] = bottom[i][j];
        cube.bottom[i][j] = tempSide[i][j];
      });

      if (turnType === "l") cube.left = rotateMatrix(cube.left);
      else if (turnType === "r") cube.right = rotateMatrix(cube.right, false);
    }

    // Front and back seem to work differently from one another, so I need to separate them
    // FRONT
    if (turnType === "f") {
      const tempSide = deepCopy(cube.top);

      const j = 0;
      const jRel = j === 0 ? properties.dimensions - 1 : 0;

      d.forEach((i) => {
        const iRel = properties.dimensions - 1 - i;

        cube.top[iRel][j] = left[jRel][iRel];
        cube.left[jRel][iRel] = bottom[i][jRel];
        cube.bottom[i][jRel] = right[j][i];
        cube.right[j][i] = tempSide[iRel][j];
      });

      // Rotate the front side
      cube.front = rotateMatrix(cube.front);
    }

    // BACK
    if (turnType === "b") {
      const tempSide = deepCopy(cube.top);

      const j = properties.dimensions - 1;
      const jRel = j === 0 ? properties.dimensions - 1 : 0;

      d.forEach((i) => {
        const iRel = properties.dimensions - 1 - i;

        cube.top[iRel][j] = right[j][i];
        cube.right[j][i] = bottom[i][jRel];
        cube.bottom[i][jRel] = left[jRel][iRel];
        cube.left[jRel][iRel] = tempSide[iRel][j];

        // Rotate the back side
        cube.back = rotateMatrix(cube.back, false);
      });
    }

    // MIDDLE MOVE
    if (turnType === "m") {
      const tempSide = deepCopy(cube.front);

      const j = Math.floor(properties.dimensions / 2);

      d.forEach((i) => {
        const iRel = properties.dimensions - 1 - i;

        cube.front[j][i] = top[j][i];
        cube.top[j][i] = back[j][iRel];
        cube.back[j][iRel] = bottom[j][i];
        cube.bottom[j][i] = tempSide[j][i];
      });
    }
  }

  return cube;
}
