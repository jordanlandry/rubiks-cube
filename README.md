# Rubik's Cube Solver

This is a 3D Rubik's Cube Solver built using [three.js](https://github.com/mrdoob/three.js/) and
[TypeScript](https://github.com/microsoft/TypeScript). The application will randomly scramble the cube, and then use the
[CFOP method](https://ruwix.com/the-rubiks-cube/advanced-cfop-fridrich/) to solve the cube. If you understand how to solve a Rubik's Cube using the
CFOP method, I encourage you to slow down the animation speed, and try to follow along.

I may add more solving methods such as the [Roux method](https://ruwix.com/the-rubiks-cube/different-rubiks-cube-solving-methods/roux-method/) or the
[Blindfolded method](https://ruwix.com/the-rubiks-cube/how-to-solve-the-rubiks-cube-blindfolded-tutorial/).

## Keybinds

| Key                   | Function                         |
| --------------------- | -------------------------------- |
| `Spacebar`            | Scramble the cube                |
| `Enter`               | Solve the cube                   |
| `m`                   | Mute the audio                   |
| `a`                   | Disable animations               |
| `Arrow Up`            | Increase animation time by 5ms   |
| `Arrow Down`          | Descrease animation time by 5ms  |
| `ctrl` + `Arrow Up`   | Increase animation time by 10ms  |
| `ctrl` + `Arrow Down` | Descrease animation time by 10ms |

## Demo

Try out the rubik's cube at https://jordanlandry.github.io/threejs-rubiks-cube-solver/
