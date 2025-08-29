import { createScene, renderer, camera } from './scene.js';
import { createCube } from './cube.js';

const { scene, mesh } = createScene(createCube());

// アニメーションループ
function tick() {
  // mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();