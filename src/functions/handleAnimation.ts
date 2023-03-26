import { Mesh, Vector3 } from "three";
import properties, { Side, Turn } from "../../properties";
import { sleep } from "../helpers/sleep";
import { scene } from "../main";

// In order to animate, since the rotation of each face is based on the rotation of its parent,
// We need to keep the rotation, so we need to duplicate the entire face and only add the effected
// spots to a new mesh, which will then be rotated around the center to animate the turn
// To avoid overlapping, we need to remove the effected spots from the original face
export default async function handleAnimateTurn(faces: Mesh[], turnType: Turn, inverted: boolean) {
  const moveAnimationProperties = {
    u: {
      indiciesToRemove: { front: [0, 1, 3, 4, 6, 7], right: [0, 1, 3, 4, 6, 7], back: [0, 1, 3, 4, 6, 7], left: [0, 1, 3, 4, 6, 7] },
      axis: "y",
      direction: -1,
      rotatedSide: "top",
    },

    d: {
      indiciesToRemove: { front: [1, 2, 4, 5, 7, 8], right: [1, 2, 4, 5, 7, 8], back: [1, 2, 4, 5, 7, 8], left: [1, 2, 4, 5, 7, 8] },
      axis: "y",
      direction: 1,
      rotatedSide: "bottom",
    },

    l: {
      indiciesToRemove: { front: [3, 4, 5, 6, 7, 8], top: [3, 4, 5, 6, 7, 8], back: [0, 1, 2, 3, 4, 5], bottom: [3, 4, 5, 6, 7, 8] },
      axis: "x",
      direction: 1,
      rotatedSide: "left",
    },

    r: {
      indiciesToRemove: { front: [0, 1, 2, 3, 4, 5], top: [0, 1, 2, 3, 4, 5], back: [3, 4, 5, 6, 7, 8], bottom: [0, 1, 2, 3, 4, 5] },
      axis: "x",
      direction: -1,
      rotatedSide: "right",
    },

    f: {
      indiciesToRemove: { right: [3, 4, 5, 6, 7, 8], top: [1, 2, 4, 5, 7, 8], left: [0, 1, 2, 3, 4, 5], bottom: [0, 1, 3, 4, 6, 7] },
      axis: "z",
      direction: -1,
      rotatedSide: "front",
    },

    b: {
      indiciesToRemove: { left: [3, 4, 5, 6, 7, 8], top: [0, 1, 3, 4, 6, 7], right: [0, 1, 2, 3, 4, 5], bottom: [1, 2, 4, 5, 7, 8] },
      axis: "z",
      direction: 1,
      rotatedSide: "back",
    },

    m: {
      indiciesToRemove: { front: [0, 1, 2, 6, 7, 8], top: [0, 1, 2, 6, 7, 8], back: [0, 1, 2, 6, 7, 8], bottom: [0, 1, 2, 6, 7, 8] },
      axis: "x",
      direction: 1,
      rotatedSide: "None",
    },
  } as { [key in Turn]: { indiciesToRemove: { [key in Side]: number[] }; axis: "x" | "y" | "z"; direction: 1 | -1; rotatedSide: Side | "None" } };

  const sideMap = {
    bottom: 0,
    top: 1,
    front: 2,
    right: 3,
    left: 4,
    back: 5,
  } as { [key in Side]: number };

  const newMesh = new Mesh();
  const { indiciesToRemove } = moveAnimationProperties[turnType];

  Object.keys(indiciesToRemove).forEach((side) => {
    const sideDuplicate = faces[sideMap[side as Side]].clone();

    const meshesToRemove = indiciesToRemove[side as Side].map((index) => sideDuplicate.children[0].children[index]);
    meshesToRemove.forEach((mesh) => sideDuplicate.children[0].remove(mesh));

    const removeFromOriginal = faces[sideMap[side as Side]].children[0].children.filter(
      (_, index) => !indiciesToRemove[side as Side].includes(index)
    );
    removeFromOriginal.forEach((mesh) => faces[sideMap[side as Side]].children[0].remove(mesh));

    newMesh.add(sideDuplicate);
  });

  const { axis, direction, rotatedSide } = moveAnimationProperties[turnType];
  const animationDirection = inverted ? ((direction * -1) as 1 | -1) : direction;

  const rotatedSideMesh = rotatedSide !== "None" ? faces[sideMap[rotatedSide]] : null;
  if (rotatedSideMesh) newMesh.add(rotatedSideMesh);

  scene.add(newMesh);

  await animate(animationDirection, { mesh: newMesh, axis: axis });
  scene.remove(newMesh);

  return;
}

async function animate(direction: 1 | -1, newMesh: { mesh: Mesh; axis: "x" | "y" | "z" }) {
  const targetTurn = (Math.PI / 2) * direction;
  const startTime = Date.now();
  const endTime = startTime + properties.animationSpeed;

  let turnSoFar = 0;
  while (Date.now() < endTime) {
    const deltaTime = Date.now() - startTime;
    const turn = (targetTurn / properties.animationSpeed) * deltaTime - turnSoFar;

    const { mesh, axis } = newMesh;

    mesh.rotateOnAxis(new Vector3(axis === "x" ? 1 : 0, axis === "y" ? 1 : 0, axis === "z" ? 1 : 0), turn);

    // This is to prevent the rotation from being added to itself causing the cube to rotate faster
    turnSoFar += turn;

    // This is to prevent the browser from freezing
    await sleep(0);
  }
}
