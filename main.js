import * as THREE from "three";

// canvas 要素を取得
const canvas = document.querySelector('#myCanvas');

// サイズを canvas のサイズに合わせる
const width = canvas.clientWidth;
const height = canvas.clientHeight;

// レンダラー
const renderer = new THREE.WebGLRenderer({ canvas, alpha:true });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// シーン
const scene = new THREE.Scene();

// カメラ
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.z = 500;

// 球体
// const geometry = new THREE.SphereGeometry(100, 30, 30);
// const material = new THREE.MeshStandardMaterial({ color: 0xFF0000 });

// 立方体にテクスチャを貼り付ける
const geometry = new THREE.BoxGeometry(150, 150, 150);
const texture = new THREE.TextureLoader().load('images/mike_alpha_1024.png');
const material = new THREE.MeshStandardMaterial({ map: texture });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// ライト
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1,1,1);
scene.add(light);

// アニメーション
function tick() {
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
tick();

// ウィンドウリサイズ対応
window.addEventListener('resize', () => {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});