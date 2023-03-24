import { Color, PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import properties from "../properties";
import Cube from "./cube";
import "./style.scss";

type Func = () => void;

export type SceneElement = {
  elements: SceneElement[] | any[];
  animate?: Func;
};

export const { scene, camera, renderer } = init();
function init() {
  const scene = new Scene();
  const camera = new PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new WebGLRenderer({ antialias: true });
  return { scene, camera, renderer };
}

const threeElements = [] as any;
function App() {
  threeElements.push(Cube());

  run();
}

// Sets up THREEjs and starts the animation loop
function run() {
  // Add the elements to the scene
  const animationLoop = [] as Func[];
  addElementsToScene(scene, threeElements, animationLoop);

  // @ts-ignore
  const controls = new OrbitControls(camera, renderer.domElement);

  // Set the background
  scene.background = new Color(properties.canvasColor);

  // Set the camera position
  const { initialCameraPosition } = properties;
  camera.position.z = initialCameraPosition.z;
  camera.position.y = initialCameraPosition.y;
  camera.position.x = initialCameraPosition.x;

  // Set the renderer size to the window size
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Hide mouse on mousedown, show mouse on mouseup
  document.addEventListener("mousedown", () => (document.body.style.cursor = "none"));
  document.addEventListener("mouseup", () => (document.body.style.cursor = "auto"));

  // Update the renderer size on window resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onWindowResize);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    animationLoop.forEach((func) => func());
  }

  animate();
}

function addElementsToScene(scene: any, elements: any, animationLoop: Func[]) {
  elements.forEach((element: any) => addToScene(scene, element, animationLoop));
}

function addToScene(scene: any, element: any, animationLoop: Func[]) {
  element.elements.forEach((e: any) => {
    if (e.elements) addToScene(scene, e, animationLoop);
    else scene.add(e);

    if (e.animate) animationLoop.push(e.animate);
  });
}

App();
