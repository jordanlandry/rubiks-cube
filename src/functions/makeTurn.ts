import properties, { Cube } from "../../properties";
import handleAnimateTurn from "./handleAnimation";
import turn from "./turn";

import * as THREE from "three";
import { animate, audio } from "../cube";
import { sleep } from "../helpers/sleep";

type Props = {
  cubeState: Cube;
  moves: any[];
  doAnimation?: boolean;
  playSound?: boolean;
  meshes: any;
  callback: () => void;
};

export default async function turnSequence({ cubeState, moves, doAnimation, meshes, callback, playSound }: Props) {
  for (let i = 0; i < moves.length; i++) {
    const { move, inverted } = moves[i];

    const runAnimation = !doAnimation ? animate : doAnimation;
    const runSound = !playSound ? audio : playSound;

    if (runAnimation) {
      await handleAnimateTurn(meshes, move, inverted);
      await turn(cubeState, move, inverted);
    } else {
      await turn(cubeState, move, inverted);
      await sleep(properties.animationSpeed);
    }

    if (runSound) playAudio();

    callback();
  }
}

let lastAudio = "";
function playAudio() {
  const listener = new THREE.AudioListener();
  const sound = new THREE.Audio(listener);

  const audioLoader = new THREE.AudioLoader();

  const audios = ["click1.mp3", "click2.mp3", "click3.mp3", "click4.mp3", "click5.mp3", "click6.mp3", "click7.mp3", "click8.mp3"].filter(
    (audio) => audio !== lastAudio
  );

  const BASE = "./audio";
  const randomAudio = audios[Math.floor(Math.random() * audios.length)];

  // Don't want to play the same audio twice in a row
  lastAudio = randomAudio;
  const path = `${BASE}/${randomAudio}`;

  audioLoader.load(path, function (buffer) {
    sound.setBuffer(buffer);
    sound.setLoop(false);
    sound.setVolume(0.2);

    sound.play();
  });
}
