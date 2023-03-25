import properties from "../../properties";

type Color = "red" | "blue" | "green" | "yellow" | "orange" | "white";
export function getColorIndex(col: Color) {
  const { colors } = properties;
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].name === col) return i;
  }

  return -1;
}
