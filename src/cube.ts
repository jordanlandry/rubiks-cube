import { Mesh } from "three";
import properties, { INITIAL_CUBE_STATE } from "../properties";
import { pllAlgorithms } from "./algs/cfop/pll";
import Face from "./face";
import turnSequence from "./functions/makeTurn";
import scramble from "./functions/scramble";
import solve from "./functions/solve";
import turn from "./functions/turn";
import { getColorIndex } from "./helpers/getColorIndex";
import { l, l2, m, m2, r, r2, u, u2 } from "./helpers/getMoves";
import interpretMoves from "./helpers/interpretMoves";
import reverseAlg from "./helpers/reverseAlg";
import { sleep } from "./helpers/sleep";
import { scene } from "./main";

export default function Cube() {
  // const { totalSize, borderSize } = properties;
  // const innerCubeSize = totalSize + borderSize - 0.01; // Makes the cube slightly smaller than the total size

  // Create a black cube as the inner cube
  // const innerCube = new Mesh(new BoxGeometry(innerCubeSize, innerCubeSize, innerCubeSize), new MeshBasicMaterial({ color: 0x000000 }));

  let cubeState = INITIAL_CUBE_STATE;

  // Create the faces of the cube
  const faces = [] as any;
  function updateElements(firstTime = false) {
    if (!firstTime) {
      scene.remove(...faces);
      faces.length = 0;
    }

    Object.values(cubeState).forEach((side, index) => {
      const faceMesh = new Mesh();

      const face = Face({ id: index, state: side });

      // Add the planes of the face to the face mesh (will always be 1 mesh)
      faceMesh.add(face.elements[0]);

      const rotation = {
        x: index === 0 ? Math.PI / 2 : index === 1 ? -Math.PI / 2 : 0,
        y: index === 3 ? Math.PI / 2 : index === 4 ? -Math.PI / 2 : index === 5 ? Math.PI : 0,
        z: 0,
      };

      faceMesh.rotation.set(rotation.x, rotation.y, rotation.z);
      faces.push(faceMesh);
    });

    if (!firstTime) scene.add(...faces);
  }

  let textElement: HTMLDivElement | null = null;
  let timeout: null | ReturnType<typeof setTimeout> = null;
  function addText(text: string, clearAfterMs = 2000) {
    const app = document.getElementById("app")!;

    if (timeout) clearTimeout(timeout);
    if (textElement) {
      textElement.innerHTML = text;
      app.removeChild(textElement);
    }

    textElement = document.createElement("div");
    textElement.style.position = "absolute";
    textElement.style.top = "50px";
    textElement.style.left = "50%";
    textElement.style.transform = "translateX(-50%)";
    textElement.style.fontSize = "2rem";
    textElement.style.color = "white";
    textElement.style.textAlign = "center";
    textElement.style.zIndex = "100";
    textElement.style.userSelect = "none";
    textElement.innerHTML = text;

    app.appendChild(textElement);

    timeout = setTimeout(() => {
      app.removeChild(textElement!);
      textElement = null;
    }, clearAfterMs);
  }

  const turnState = {
    scrambling: false,
    solving: false,
    solved: true,
  };

  async function handleKeyDown(e: KeyboardEvent) {
    if (e.key === " ") {
      if (turnState.scrambling || turnState.solving) return;

      turnState.scrambling = true;
      turnState.solved = false;

      const scrambleSequence = scramble();

      // Make sure white ends up on top
      const yellow = getColorIndex("yellow");
      if (cubeState.top[1][1] === yellow) {
        scrambleSequence.push(l()[0]);
        scrambleSequence.push(l()[0]);
        scrambleSequence.push(m()[0]);
        scrambleSequence.push(m()[0]);
        scrambleSequence.push(r()[0]);
        scrambleSequence.push(r()[0]);
      }

      addText("Scrambling...");
      await turnSequence({ cubeState, moves: scrambleSequence, doAnimation: true, meshes: faces, callback: updateElements });
      turnState.scrambling = false;
    }

    if (e.key === "Enter") {
      if (turnState.solving) {
        addText("Already solving");
        return;
      }

      if (turnState.solved) {
        addText("Already solved");
        return;
      }

      if (turnState.scrambling) {
        addText("Cannot solve while scrambling");
        return;
      }

      turnState.solving = true;

      addText("Solving...");

      const startTime = Date.now();
      const solveSequence = interpretMoves(await solve(cubeState));

      console.log("Solve time: " + (Date.now() - startTime) + "ms");
      console.log("Solve length: " + solveSequence.length + " moves");

      await turnSequence({ cubeState, moves: solveSequence, doAnimation: true, meshes: faces, callback: updateElements });

      turnState.solving = false;
      turnState.solved = true;
    }

    // Get the PLL cube states for each algorithm (for debugging)
    if (e.key === "p") {
      const cubeStates = [] as any;
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 2; j++) {
          turnSequence({ cubeState, moves: [...r()], doAnimation: false, meshes: faces, callback: updateElements });
          turnSequence({ cubeState, moves: [...m()], doAnimation: false, meshes: faces, callback: updateElements });
          turnSequence({ cubeState, moves: [...l()], doAnimation: false, meshes: faces, callback: updateElements });
        }

        for (let j = 0; j < i; j++) turnSequence({ cubeState, moves: [...u()], doAnimation: false, meshes: faces, callback: updateElements });

        const a = reverseAlg(interpretMoves(pllAlgorithms[14].sequence));

        await turnSequence({ cubeState, moves: a, doAnimation: true, meshes: faces, callback: updateElements });
        cubeStates.push(JSON.stringify(cubeState));

        cubeState = {
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
        };

        await sleep(1000);
      }

      console.log("cubeStates: [" + cubeStates + "]");
    }

    // Changing the animation speed
    if (e.key === "ArrowUp") {
      if (e.ctrlKey) properties.animationSpeed += 10;
      else properties.animationSpeed += 5;

      if (properties.animationSpeed > 1000) properties.animationSpeed = 1000;
      if (properties.animationSpeed === 6) properties.animationSpeed = 5; // If it's 6, it's because it was 1 and we added 5 so we need to set it to 5
      if (properties.animationSpeed === 11) properties.animationSpeed = 10;

      addText("Animation time: " + properties.animationSpeed + "ms");
    }

    if (e.key === "ArrowDown") {
      if (e.ctrlKey) properties.animationSpeed -= 10;
      else properties.animationSpeed -= 5;

      if (properties.animationSpeed <= 0) properties.animationSpeed = 1;

      addText("Animation time: " + properties.animationSpeed + "ms");
    }
  }

  window.addEventListener("keydown", handleKeyDown);

  updateElements(true);

  const faceElements = { elements: faces };

  return { elements: [faceElements] };
}
