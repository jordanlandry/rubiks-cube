const properties = {
  // Official Rubik's cubes have a specific color order which is why this is an array
  // As opposed to an object with the colors as keys since objects are technically unordered
  // The order will go : Down, Up, Front, Right, Left, Back
  colors: [
    { name: "yellow", hex: 0xffff00 },
    { name: "white", hex: 0xffffff },
    { name: "green", hex: 0x00ff00 },
    { name: "red", hex: 0xff0000 },
    { name: "orange", hex: 0xffa500 },
    { name: "blue", hex: 0x0000ff },
  ],

  // canvasColor: 0xaacccc, // Background color
  canvasColor: 0, // Background color

  dimensions: 3,
  totalSize: 3,

  borderSize: 0.025,
  borderColor: 0x000000, // Black

  initialCameraPosition: { x: 0, y: 0, z: 7 },

  animationSpeed: 100, // ms
};

// 3D array representing the cube state
// Each value will represent a color
// See propertes.colors for the color values

// This is temporary and will only be used for testing and debugging
// I will later be using a function to generate this array to work with any size cube
export const INITIAL_CUBE_STATE = {
  bottom: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  top: [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ],
  front: [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2],
  ],
  right: [
    [3, 3, 3],
    [3, 3, 3],
    [3, 3, 3],
  ],
  left: [
    [4, 4, 4],
    [4, 4, 4],
    [4, 4, 4],
  ],
  back: [
    [5, 5, 5],
    [5, 5, 5],
    [5, 5, 5],
  ],
} as Cube;

export type Side = "bottom" | "top" | "front" | "right" | "left" | "back";

export const validTurns = ["u", "d", "l", "r", "f", "b", "m"] as const;

export type Turn = typeof validTurns[number];
export type Move = {
  move: Turn;
  inverted: boolean;
};

export type Cube = { [key in Side]: number[][] };

// Taking the colors and getting the corrosponding side it should be on
export const colorToSideMap = {
  0: "bottom",
  1: "top",
  2: "front",
  3: "right",
  4: "left",
  5: "back",
} as { [key: number]: Side };

export default properties;
