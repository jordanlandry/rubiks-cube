import { Color, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";

type Props = {
  id: number;
  location: Vector3;
  rotation: Vector3;
  color: Color;
  size: number;
};

export default function Square({ location, color, size, rotation }: Props) {
  const mesh = new Mesh(new PlaneGeometry(size, size), new MeshBasicMaterial({ color }));
  mesh.position.set(location.x, location.y, location.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);

  return { elements: [mesh] };
}
