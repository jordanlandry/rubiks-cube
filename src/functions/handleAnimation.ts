import { Mesh } from "three";
import properties, { Side, Turn } from "../../properties";
import { sleep } from "../helpers/sleep";
import { scene } from "../main";

// prettier-ignore
export default async function handleAnimateTurn(faces: any, turnType: Turn, inverted: boolean) {
  const { animationSpeed,} = properties;

  if (turnType === "u") {
    const effectedPieces = {
      front: [[0, 2], [1, 2], [2, 2]],
      right: [[0, 2], [1, 2], [2, 2]],
      back: [[0, 2], [1, 2], [2, 2]],
      left: [[0, 2], [1, 2], [2, 2]],
    } as { [key in Side]: number[][] };

    const newMesh = new Mesh();


    // for (const side in effectedPieces) {
    //   for (const piece of effectedPieces[side as Side]) {
    //     const [i, j] = piece;
    //   }
    // }

    // meshes.push(faces[2].children[0]);
    newMesh.add(faces[2].children[0].children[2]);
    newMesh.add(faces[2].children[0].children[4]);
    newMesh.add(faces[2].children[0].children[6]);

    // newMesh.add(faces[3].children[0].children[2]);
    // newMesh.add(faces[3].children[0].children[4]);
    // newMesh.add(faces[3].children[0].children[6]);

    // newMesh.add(faces[2].children[1])
    // newMesh.add(faces[2].children[2])

    scene.add(newMesh);

    
    const totalTurn = Math.PI / 2 * (inverted ? 1 : -1);
    const startTime = Date.now();
    const endTime = startTime + animationSpeed;
    
    let totalTurnSoFar = 0;
    
    let deltaTime = 0;
    while (Date.now() < endTime) {
      deltaTime = Date.now() - startTime;
      
      const turn = totalTurn / animationSpeed * deltaTime - totalTurnSoFar;
      faces[1].rotateZ(turn);
      
      newMesh.rotateY(turn);
      
      
      totalTurnSoFar += turn;
      await sleep(0);
    }
    
    
    scene.remove(newMesh);


    // for (let i = 0; i < fps; i++) {
    //   const turn = totalTurn / fps;
    //   faces[1].rotation.z += turn;
    //   await sleep(fps / fps);
    // }
  }


}
