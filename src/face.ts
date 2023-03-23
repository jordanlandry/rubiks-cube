import { Color, Mesh, Vector3 } from "three";
import properties from "../properties";
import Plane from "./square";

type Props = {
  id: number;
  state: number[][];
};

export default function Face({ id, state }: Props) {
  const { totalSize, dimensions, borderSize, colors } = properties;

  const faceSize = totalSize / dimensions;
  const faceSizeOffset = faceSize - borderSize; // Gives a small gap between the faces

  const mesh = new Mesh();

  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      const location = {
        x: (i - (properties.dimensions - 1) / 2) * faceSize,
        y: (j - (properties.dimensions - 1) / 2) * faceSize,
        z: totalSize / 2 + borderSize / 2,
      };

      const color = new Color(colors[state[i][j]].hex);

      mesh.add(
        Plane({
          id,
          location: new Vector3(location.x, location.y, location.z),
          rotation: new Vector3(0, 0, 0),
          color,
          size: faceSizeOffset,
        }).elements[0]
      );
    }
  }

  return { elements: [mesh] };
}
