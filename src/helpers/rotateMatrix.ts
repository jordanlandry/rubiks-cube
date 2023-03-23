import deepCopy from "./deepCopy";

export default function rotateMatrix(mat: any[][], clockwise = true) {
  const newArray = deepCopy(mat);

  const rows = newArray.length;
  const cols = newArray[0].length;

  const newMatrix = [];
  for (let i = 0; i < cols; i++) {
    newMatrix[i] = new Array(rows);
  }

  if (clockwise) {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newMatrix[j][rows - i - 1] = newArray[i][j];
      }
    }
  } else {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        newMatrix[cols - j - 1][i] = newArray[i][j];
      }
    }
  }

  return newMatrix;
}
