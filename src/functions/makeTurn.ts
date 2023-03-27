import { Cube } from "../../properties";
import handleAnimateTurn from "./handleAnimation";
import turn from "./turn";

type Props = {
  cubeState: Cube;
  moves: any[];
  doAnimation: boolean;
  meshes: any;
  callback: () => void;
};

export default async function turnSequence({ cubeState, moves, doAnimation, meshes, callback }: Props) {
  for (let i = 0; i < moves.length; i++) {
    const { move, inverted } = moves[i];

    if (doAnimation) await handleAnimateTurn(meshes, move, inverted);
    await turn(cubeState, move, inverted);

    callback();
  }
}
