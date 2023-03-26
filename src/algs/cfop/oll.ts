import properties, { Cube, Side } from "../../../properties";
import { getColorIndex } from "../../helpers/getColorIndex";
import { b, bp, d, dp, f, f2, fp, l, l2, lp, lw, lwp, m, m2, mp, r, r2, rp, rw, rw2, rwp, u, u2, up } from "../../helpers/getMoves";

// All of the OLL algorithms are found from https://jperm.net/algs/oll and https://www.speedsolving.com/wiki/index.php/OLL

// Note my cube doesn't have 2layer moves,
// So I've had to replace those moves with equivalent moves / algorithms to get the same result

// To get the cubeStates, I ran the algorithms on the cube backwards and copy and pasted the cubeStates
// And when I look for cubeStates, I only want to pay attention to where the yellow pieces are

export function ollSolved(cube: Cube) {
  const { dimensions } = properties;

  const yellow = getColorIndex("yellow");

  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      if (cube.top[i][j] !== yellow) return false;
    }
  }

  return true;
}

// prettier-ignore
export const ollAlgorithms = {
  1: {
    sequence: [r, u2, r2, f, r, fp, u2, rp, f, r, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,2,2],[3,0,4],[3,5,5]],"front":[[5,5,5],[5,5,0],[5,5,2]],"right":[[3,3,0],[3,3,0],[3,3,0]],"left":[[4,4,0],[4,4,0],[4,4,0]],"back":[[2,2,4],[2,2,0],[2,2,4]]},
  },

  2: {
    sequence: [rw, u, rwp, u2, rw, u2, rp, u2, r, up, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,2,3],[3,0,4],[2,5,4]],"front":[[5,5,3],[5,5,0],[5,5,4]],"right":[[3,3,0],[3,3,0],[3,3,5]],"left":[[4,4,5],[4,4,0],[4,4,0]],"back":[[2,2,0],[2,2,0],[2,2,0]]}
  },

  3: {
    sequence: [rwp, r2, u, rp, u, rw, u2, rwp, u, mp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,2,5],[4,0,3],[2,5,4]],"front":[[5,5,3],[5,5,0],[5,5,0]],"right":[[3,3,3],[3,3,0],[3,3,0]],"left":[[4,4,4],[4,4,0],[4,4,5]],"back":[[2,2,2],[2,2,0],[2,2,0]]}
  },

  4: {
    sequence: [m, up, rw, u2, rwp, up, r, up, rp, mp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,5,3],[3,0,4],[0,2,5]],"front":[[5,5,0],[5,5,0],[5,5,4]],"right":[[3,3,5],[3,3,0],[3,3,3]],"left":[[4,4,0],[4,4,0],[4,4,4]],"back":[[2,2,0],[2,2,0],[2,2,2]]}
  },

  5: {
    sequence: [lwp, u2, l, u, lp, u, lw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,0],[4,0,0],[4,5,5]],"front":[[5,5,3],[5,5,0],[5,5,0]],"right":[[3,3,2],[3,3,0],[3,3,0]],"left":[[4,4,3],[4,4,3],[4,4,0]],"back":[[2,2,4],[2,2,2],[2,2,5]]}
  },

  6: {
    sequence: [rw, u2, rp, up, r, up, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,5,5],[3,0,0],[2,0,0]],"front":[[5,5,0],[5,5,0],[5,5,4]],"right":[[3,3,0],[3,3,4],[3,3,4]],"left":[[4,4,0],[4,4,0],[4,4,2]],"back":[[2,2,5],[2,2,2],[2,2,3]]}
  },

  7: {
    sequence: [rw, u, rp, u, r, u2, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,3],[4,0,0],[4,5,5]],"front":[[5,5,2],[5,5,0],[5,5,0]],"right":[[3,3,2],[3,3,0],[3,3,0]],"left":[[4,4,5],[4,4,3],[4,4,3]],"back":[[2,2,4],[2,2,2],[2,2,0]]}
  },

  8: {
    sequence: [lwp, up, l, up, lp, u2, lw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,5,5],[3,0,0],[0,0,4]],"front":[[5,5,0],[5,5,0],[5,5,2]],"right":[[3,3,4],[3,3,4],[3,3,5]],"left":[[4,4,0],[4,4,0],[4,4,2]],"back":[[2,2,0],[2,2,2],[2,2,3]]}
  },

  9: {
    sequence: [r, u, rp, up, rp, f, r2, u, rp, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,5],[2,0,0],[0,5,3]],"front":[[5,5,0],[5,5,0],[5,5,4]],"right":[[3,3,5],[3,3,0],[3,3,2]],"left":[[4,4,0],[4,4,4],[4,4,4]],"back":[[2,2,0],[2,2,3],[2,2,3]]},
  },

  10: {
    sequence: [r, u, rp, u, rp, f, r, fp, r, u2, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,2],[0,0,2],[5,3,0]],"front":[[5,5,5],[5,5,5],[5,5,0]],"right":[[3,3,4],[3,3,0],[3,3,2]],"left":[[4,4,3],[4,4,4],[4,4,0]],"back":[[2,2,4],[2,2,0],[2,2,0]]},
  },

  11: {
    sequence: [r, mp, u, rp, u, rp, f, r, fp, r, u2, m, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,2],[5,0,0],[5,3,0]],"front":[[5,5,5],[5,5,0],[5,5,0]],"right":[[3,3,4],[3,3,0],[3,3,2]],"left":[[4,4,3],[4,4,4],[4,4,0]],"back":[[2,2,4],[2,2,2],[2,2,0]]},
  },

  12: {
    sequence: [mp, rp, up, r, up, rp, u2, r, up, r, rp, m],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,5,0],[4,0,0],[4,0,5]],"front":[[5,5,0],[5,5,0],[5,5,5]],"right":[[3,3,0],[3,3,3],[3,3,3]],"left":[[4,4,2],[4,4,0],[4,4,4]],"back":[[2,2,0],[2,2,2],[2,2,3]]},
  },

  13: {
    sequence: [f, u, r, up, r2, fp, r, u, r, up, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,5],[3,0,5],[4,0,2]],"front":[[5,5,3],[5,5,0],[5,5,0]],"right":[[3,3,2],[3,3,2],[3,3,0]],"left":[[4,4,4],[4,4,4],[4,4,5]],"back":[[2,2,3],[2,2,0],[2,2,0]]},
  },

  14: {
    sequence: [rp, f, r, u, rp, fp, r, f, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,3],[3,0,5],[0,0,4]],"front":[[5,5,0],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,2],[3,3,5]],"left":[[4,4,0],[4,4,4],[4,4,4]],"back":[[2,2,0],[2,2,0],[2,2,2]]},
  },

  15: {
    sequence: [lwp, up, lw, lp, up, l, u, lwp, u, lw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,0],[4,0,5],[4,0,5]],"front":[[5,5,3],[5,5,0],[5,5,0]],"right":[[3,3,2],[3,3,3],[3,3,0]],"left":[[4,4,3],[4,4,2],[4,4,0]],"back":[[2,2,4],[2,2,0],[2,2,5]]}
  },

  16: {
    sequence: [rw, u, rwp, r, u, rp, up, rw, up, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,5],[3,0,5],[2,0,0]],"front":[[5,5,0],[5,5,0],[5,5,4]],"right":[[3,3,0],[3,3,2],[3,3,4]],"left":[[4,4,0],[4,4,4],[4,4,2]],"back":[[2,2,5],[2,2,0],[2,2,3]]}
  },

  17: {
    sequence: [f, rp, fp, r2, rwp, u, r, up, rp, up, mp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,2,0],[4,0,3],[0,5,3]],"front":[[5,5,0],[5,5,0],[5,5,3]],"right":[[3,3,2],[3,3,0],[3,3,0]],"left":[[4,4,4],[4,4,0],[4,4,5]],"back":[[2,2,5],[2,2,0],[2,2,2]]}
  },

  18: {
    sequence: [rw, u, rp, u, r, u2, rw2, up, r, up, rp, u2, rw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,2,0],[3,0,4],[3,5,0]],"front":[[5,5,0],[5,5,0],[5,5,0]],"right":[[3,3,5],[3,3,0],[3,3,3]],"left":[[4,4,4],[4,4,0],[4,4,5]],"back":[[2,2,2],[2,2,0],[2,2,2]]}
  },

  19: {
    sequence: [rwp, r, u, r, u, rp, up, mp, rp, f, r, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,5,0],[3,0,4],[3,2,0]],"front":[[5,5,4],[5,5,0],[5,5,2]],"right":[[3,3,0],[3,3,0],[3,3,5]],"left":[[4,4,4],[4,4,0],[4,4,0]],"back":[[2,2,3],[2,2,0],[2,2,2]]}
  },

  20: {
    sequence: [rw, u, rp, up, m2, u, r, up, rp, up, mp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,2,0],[4,0,3],[0,5,0]],"front":[[5,5,3],[5,5,0],[5,5,3]],"right":[[3,3,2],[3,3,0],[3,3,2]],"left":[[4,4,5],[4,4,0],[4,4,5]],"back":[[2,2,4],[2,2,0],[2,2,4]]}
  },

  21: {
    sequence: [r, u2, rp, up, r, u, rp, up, r, up, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,0,4],[0,0,0],[3,0,3]],"front":[[5,5,0],[5,5,5],[5,5,0]],"right":[[3,3,5],[3,3,2],[3,3,2]],"left":[[4,4,2],[4,4,3],[4,4,5]],"back":[[2,2,0],[2,2,4],[2,2,0]]},
  },

  22: {
    sequence: [r, u2, r2, up, r2, up, r2, u2, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,5],[0,0,0],[4,0,4]],"front":[[5,5,3],[5,5,2],[5,5,0]],"right":[[3,3,2],[3,3,3],[3,3,5]],"left":[[4,4,0],[4,4,5],[4,4,0]],"back":[[2,2,0],[2,2,4],[2,2,3]]}
  },

  23: {
    sequence: [r2, dp, r, u2, rp, d, r, u2, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,3],[0,0,0],[0,0,2]],"front":[[5,5,5],[5,5,5],[5,5,3]],"right":[[3,3,2],[3,3,3],[3,3,4]],"left":[[4,4,5],[4,4,4],[4,4,4]],"back":[[2,2,0],[2,2,2],[2,2,0]]}
  },

  24: {
    sequence: [rw, u, rp, up, rwp, f, r, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,5],[0,0,0],[0,0,0]],"front":[[5,5,0],[5,5,5],[5,5,5]],"right":[[3,3,3],[3,3,3],[3,3,2]],"left":[[4,4,4],[4,4,4],[4,4,2]],"back":[[2,2,4],[2,2,2],[2,2,0]]}
  },
  
  25: {
    sequence: [fp, rw, u, rp, up, rwp, f, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,5],[0,0,0],[2,0,0]],"front":[[5,5,5],[5,5,5],[5,5,0]],"right":[[3,3,3],[3,3,3],[3,3,2]],"left":[[4,4,0],[4,4,4],[4,4,4]],"back":[[2,2,4],[2,2,2],[2,2,3]]}
  },

  26: {
    sequence: [r, u2, rp, up, r, up, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,5],[0,0,0],[2,0,0]],"front":[[5,5,0],[5,5,5],[5,5,4]],"right":[[3,3,0],[3,3,4],[3,3,4]],"left":[[4,4,0],[4,4,2],[4,4,2]],"back":[[2,2,5],[2,2,3],[2,2,3]]}
  },

  27: {
    sequence: [r, u, rp, u, r, u2, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,3],[0,0,0],[4,0,5]],"front":[[5,5,2],[5,5,5],[5,5,0]],"right":[[3,3,2],[3,3,2],[3,3,0]],"left":[[4,4,5],[4,4,3],[4,4,3]],"back":[[2,2,4],[2,2,4],[2,2,0]]}
  },

  28: {
    sequence: [rw, u, rp, up, rwp, r, u, r, up, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,0],[2,0,0],[0,5,0]],"front":[[5,5,5],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,0],[3,3,3]],"left":[[4,4,4],[4,4,4],[4,4,4]],"back":[[2,2,2],[2,2,3],[2,2,2]]}
  },

  29: {
    sequence: [r, u, rp, up, r, up, rp, fp, up, f, r, u, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,3],[3,0,0],[0,5,0]],"front":[[5,5,0],[5,5,0],[5,5,4]],"right":[[3,3,5],[3,3,0],[3,3,2]],"left":[[4,4,5],[4,4,4],[4,4,2]],"back":[[2,2,4],[2,2,2],[2,2,0]]}
  },

  30: {
    sequence: [f, rp, f, r2, up, rp, up, r, u, rp, f2],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,4],[2,0,0],[0,5,4]],"front":[[5,5,3],[5,5,0],[5,5,3]],"right":[[3,3,2],[3,3,0],[3,3,0]],"left":[[4,4,0],[4,4,3],[4,4,5]],"back":[[2,2,2],[2,2,4],[2,2,5]]}
  },

  31: {
    sequence: [rp, up, f, u, r, up, rp, fp, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,2,2],[5,0,0],[0,0,0]],"front":[[5,5,0],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,3],[3,3,2]],"left":[[4,4,3],[4,4,0],[4,4,5]],"back":[[2,2,4],[2,2,4],[2,2,0]]}
  },

  32: {
    sequence: [l, u, fp, up, lp, u, l, f, lp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,0],[5,0,0],[3,2,2]],"front":[[5,5,5],[5,5,0],[5,5,0]],"right":[[3,3,5],[3,3,0],[3,3,4]],"left":[[4,4,2],[4,4,4],[4,4,4]],"back":[[2,2,0],[2,2,3],[2,2,3]]}
  },

  33: {
    sequence: [r, u, rp, up, rp, f, r, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,5],[3,0,5],[0,0,0]],"front":[[5,5,0],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,2],[3,3,2]],"left":[[4,4,4],[4,4,4],[4,4,2]],"back":[[2,2,4],[2,2,0],[2,2,0]]}
  },

  34: {
    sequence: [r, u, r2, up, rp, f, r, u, r, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,3],[3,0,5],[0,0,5]],"front":[[5,5,4],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,2],[3,3,0]],"left":[[4,4,0],[4,4,4],[4,4,2]],"back":[[2,2,4],[2,2,0],[2,2,2]]}
  },

  35: {
    sequence: [r, u2, r2, f, r, fp, r, u2, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,2,0],[0,0,3],[0,0,3]],"front":[[5,5,0],[5,5,5],[5,5,3]],"right":[[3,3,2],[3,3,4],[3,3,0]],"left":[[4,4,5],[4,4,0],[4,4,4]],"back":[[2,2,5],[2,2,0],[2,2,4]]}
  },

  36: {
    sequence: [lp, up, l, up, lp, u, l, u, l, fp, lp, f],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,5,0],[4,0,0],[0,0,4]],"front":[[5,5,5],[5,5,0],[5,5,3]],"right":[[3,3,2],[3,3,2],[3,3,5]],"left":[[4,4,4],[4,4,0],[4,4,0]],"back":[[2,2,0],[2,2,3],[2,2,2]]}
  },

  37: {
    sequence: [f, rp, fp, r, u, r, up, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,0],[2,0,0],[0,5,5]],"front":[[5,5,0],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,0],[3,3,0]],"left":[[4,4,2],[4,4,4],[4,4,4]],"back":[[2,2,4],[2,2,3],[2,2,3]]}
  },

  38: {
    sequence: [r, u, rp, u, r, up, rp, up, rp, f, r, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,3],[3,0,0],[4,5,0]],"front":[[5,5,4],[5,5,0],[5,5,5]],"right":[[3,3,0],[3,3,0],[3,3,3]],"left":[[4,4,5],[4,4,2],[4,4,2]],"back":[[2,2,2],[2,2,4],[2,2,0]]}
  },

  39: {
    sequence: [l, fp, lp, up, l, u, f, up, lp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,2],[5,0,3],[5,0,0]],"front":[[5,5,5],[5,5,0],[5,5,3]],"right":[[3,3,0],[3,3,2],[3,3,2]],"left":[[4,4,3],[4,4,4],[4,4,4]],"back":[[2,2,4],[2,2,0],[2,2,0]]}
  },

  40: {
    sequence: [rp, f, r, u, rp, up, fp, u, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,0,0],[5,0,4],[0,0,2]],"front":[[5,5,4],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,3],[3,3,4]],"left":[[4,4,2],[4,4,2],[4,4,0]],"back":[[2,2,0],[2,2,0],[2,2,3]]}
  },

  41: {
    sequence: [r, u, rp, u, r, u2, rp, f, r, u, rp, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,5],[3,0,0],[0,5,5]],"front":[[5,5,4],[5,5,0],[5,5,3]],"right":[[3,3,2],[3,3,0],[3,3,3]],"left":[[4,4,4],[4,4,2],[4,4,2]],"back":[[2,2,0],[2,2,4],[2,2,0]]}
  },

  42: {
    sequence: [rp, up, r, up, rp, u2, r, f, r, u, rp, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,0,0],[0,0,5],[2,3,0]],"front":[[5,5,0],[5,5,4],[5,5,0]],"right":[[3,3,3],[3,3,0],[3,3,5]],"left":[[4,4,5],[4,4,2],[4,4,4]],"back":[[2,2,3],[2,2,0],[2,2,4]]}
  },

  43: {
    sequence: [fp, up, lp, u, l, f],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,5,3],[2,0,0],[0,0,0]],"front":[[5,5,5],[5,5,0],[5,5,4]],"right":[[3,3,5],[3,3,3],[3,3,2]],"left":[[4,4,0],[4,4,0],[4,4,0]],"back":[[2,2,4],[2,2,4],[2,2,2]]}
  },
  
  44: {
    sequence: [f, u, r, up, rp, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,0],[2,0,0],[4,5,4]],"front":[[5,5,3],[5,5,0],[5,5,5]],"right":[[3,3,0],[3,3,0],[3,3,0]],"left":[[4,4,2],[4,4,4],[4,4,5]],"back":[[2,2,2],[2,2,3],[2,2,3]]}
  },

  45: {
    sequence: [f, r, u, rp, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[3,0,3],[3,0,5],[0,0,0]],"front":[[5,5,5],[5,5,0],[5,5,4]],"right":[[3,3,5],[3,3,2],[3,3,2]],"left":[[4,4,0],[4,4,4],[4,4,0]],"back":[[2,2,4],[2,2,0],[2,2,2]]}
  },

  46: {
    sequence: [rp, up, rp, f, r, fp, u, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,5,0],[0,0,0],[4,4,4]],"front":[[5,5,3],[5,5,3],[5,5,5]],"right":[[3,3,0],[3,3,0],[3,3,0]],"left":[[4,4,2],[4,4,0],[4,4,5]],"back":[[2,2,2],[2,2,2],[2,2,3]]}
  },

  47: {
    sequence: [rp, up, rp, f, r, fp, rp, f, r, fp, u, r],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,3,4],[4,0,0],[5,0,2]],"front":[[5,5,0],[5,5,0],[5,5,3]],"right":[[3,3,0],[3,3,5],[3,3,0]],"left":[[4,4,2],[4,4,0],[4,4,5]],"back":[[2,2,3],[2,2,2],[2,2,0]]}
  },

  48: {
    sequence: [f, r, u, rp, up, r, u, rp, up, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,0,2],[2,0,0],[3,5,3]],"front":[[5,5,4],[5,5,0],[5,5,0]],"right":[[3,3,5],[3,3,0],[3,3,2]],"left":[[4,4,0],[4,4,4],[4,4,0]],"back":[[2,2,0],[2,2,3],[2,2,4]]}
  },

  49: {
    sequence: [rw, up, rw2, u, rw2, u, rw2, up, rw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,2,5],[4,0,0],[4,0,4]],"front":[[5,5,3],[5,5,0],[5,5,0]],"right":[[3,3,2],[3,3,3],[3,3,5]],"left":[[4,4,0],[4,4,0],[4,4,0]],"back":[[2,2,0],[2,2,5],[2,2,3]]}
  },

  50: {
    sequence: [rwp, u, rw2, up, rw2, up, rw2, u, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[2,5,5],[0,0,4],[4,0,4]],"front":[[5,5,3],[5,5,2],[5,5,0]],"right":[[3,3,2],[3,3,3],[3,3,5]],"left":[[4,4,0],[4,4,0],[4,4,0]],"back":[[2,2,0],[2,2,0],[2,2,3]]}
  },

  51: {
    sequence: [f, u, r, up, rp, u, r, up, rp, fp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,0,4],[3,0,5],[5,0,2]],"front":[[5,5,0],[5,5,0],[5,5,3]],"right":[[3,3,0],[3,3,2],[3,3,0]],"left":[[4,4,2],[4,4,4],[4,4,5]],"back":[[2,2,3],[2,2,0],[2,2,0]]}
  },

  52: {
    sequence: [r, u, rp, u, r, up, b, up, bp, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,4,2],[0,0,0],[4,3,4]],"front":[[5,5,0],[5,5,5],[5,5,5]],"right":[[3,3,0],[3,3,0],[3,3,0]],"left":[[4,4,3],[4,4,0],[4,4,3]],"back":[[2,2,2],[2,2,2],[2,2,0]]}
  },

  53: {
    sequence: [lwp, u2, l, u, lp, up, l, u, lp, u, lw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,5,4],[3,0,0],[3,0,3]],"front":[[5,5,0],[5,5,0],[5,5,0]],"right":[[3,3,5],[3,3,4],[3,3,2]],"left":[[4,4,2],[4,4,0],[4,4,5]],"back":[[2,2,0],[2,2,2],[2,2,0]]}
  },

  54: {
    sequence: [rw, u2, rp, up, r, u, rp, up, r, up, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[4,0,4],[4,0,0],[3,5,3]],"front":[[5,5,0],[5,5,0],[5,5,0]],"right":[[3,3,5],[3,3,0],[3,3,2]],"left":[[4,4,2],[4,4,3],[4,4,5]],"back":[[2,2,0],[2,2,2],[2,2,0]]}
  },

  55: {
    sequence: [rp, f, r, u, r, up, r2, fp, r2, up, rp, u, r, u, rp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,0,5],[3,0,5],[2,0,2]],"front":[[5,5,0],[5,5,0],[5,5,0]],"right":[[3,3,3],[3,3,4],[3,3,4]],"left":[[4,4,4],[4,4,2],[4,4,3]],"back":[[2,2,0],[2,2,0],[2,2,0]]}
  },

  56: {
    sequence: [rwp, up, rw, up, rp, u, r, up, rp, u, r, rwp, u, rw],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[5,0,2],[2,0,3],[5,0,2]],"front":[[5,5,4],[5,5,0],[5,5,3]],"right":[[3,3,0],[3,3,5],[3,3,0]],"left":[[4,4,0],[4,4,4],[4,4,0]],"back":[[2,2,3],[2,2,0],[2,2,4]]}
  },

  57: {
    sequence: [r, u, rp, up, mp, u, r, up, rwp],
    cubeState: {"bottom":[[1,1,1],[1,1,1],[1,1,1]],"top":[[0,0,0],[3,0,5],[0,0,0]],"front":[[5,5,5],[5,5,0],[5,5,5]],"right":[[3,3,3],[3,3,2],[3,3,3]],"left":[[4,4,4],[4,4,4],[4,4,4]],"back":[[2,2,2],[2,2,0],[2,2,2]]}
  }
} as { [key: number]: { sequence: any; cubeState: Cube  | any} };

// Identify which OLL algorithm to use
function identifyAlg(cube: Cube) {
  // Go through each algorithm, and check if all the yellow pieces line up

  const algs = Object.keys(ollAlgorithms);

  // Which sides and coordinates to look at
  const sidesToCheck = ["front", "right", "left", "back"] as Side[];
  const sideCoords = [
    [0, 2],
    [1, 2],
    [2, 2],
  ];

  const { dimensions } = properties;

  const yellow = getColorIndex("yellow");

  algLoop: for (let i = 0; i < algs.length; i++) {
    const alg = ollAlgorithms[Number(algs[i])];

    // Top layer
    for (let j = 0; j < dimensions * dimensions; j++) {
      const x = j % dimensions;
      const y = Math.floor(j / dimensions);

      if (cube.top[x][y] === yellow && alg.cubeState.top[x][y] !== yellow) continue algLoop;
      if (cube.top[x][y] !== yellow && alg.cubeState.top[x][y] === yellow) continue algLoop;
    }

    // Left right and back layers
    for (let j = 0; j < sidesToCheck.length; j++) {
      const side = sidesToCheck[j];

      for (let k = 0; k < sideCoords.length; k++) {
        const [x, y] = sideCoords[k];

        if (cube[side][x][y] === yellow && alg.cubeState[side][x][y] !== yellow) continue algLoop;
        if (cube[side][x][y] !== yellow && alg.cubeState[side][x][y] === yellow) continue algLoop;
      }
    }

    // If we get here, that means the algorithm is correct
    return alg.sequence;
  }
}

export default function solveOLL(cube: Cube, count: number) {
  // Adding l2, m2, r2, causes the cube to do the equivalent of a cube rotation of 180 degrees
  // Putting yellow on the top side, making it so I don't have to calculate every algorithm
  // as if it was upsidedown, as every OLL algorithm is if the yellow is on the top side

  const sequence = getSequence(cube);
  if (count === 0) return [l2, m2, r2];
  return sequence;
}

function getSequence(cube: Cube) {
  // If there is no algorithm for the state, that means the cube isn't oriented correctly,
  // So to fix this it will add a U turn, and try again

  const alg = identifyAlg(cube);
  if (alg) return alg;
  else return [u];
}
