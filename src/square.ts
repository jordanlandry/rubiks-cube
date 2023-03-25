import { Color, Mesh, MeshBasicMaterial, PlaneGeometry, Vector3 } from "three";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

type Props = {
  id: number;
  location: Vector3;
  rotation: Vector3;
  color: Color;
  size: number;
  i: number;
  j: number;
};

export default function Square({ location, color, size, rotation, i, j }: Props) {
  const mesh = new Mesh(new PlaneGeometry(size, size), new MeshBasicMaterial({ color }));
  mesh.position.set(location.x, location.y, location.z);
  mesh.rotation.set(rotation.x, rotation.y, rotation.z);

  let showText = false;

  function addText() {
    const loader = new FontLoader();

    const text = "(" + i + " , " + j + ")";
    loader.load("https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", (font) => {
      const textGeometry = new TextGeometry(text, {
        font,
        size: 0.2,
        height: 0.01,
      });

      const textMesh = new Mesh(textGeometry, new MeshBasicMaterial({ color: 0x000000 }));

      textMesh.translateX(-0.335);
      textMesh.translateY(-0.08);
      mesh.add(textMesh);
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "t") {
      showText = !showText;

      if (showText) addText();
      if (!showText) mesh.remove(mesh.children[0]);
    }
  });

  return { elements: [mesh] };
}
