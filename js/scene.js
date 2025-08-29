import * as THREE from "three";

// canvas 要素を取得
const canvas = document.querySelector('#myCanvas');

// サイズ設定
const width = canvas.clientWidth || window.innerWidth;
const height = canvas.clientHeight || window.innerHeight;

// レンダラー
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

// カメラ
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
camera.position.z = 500;

// シーン生成関数
export function createScene(object3d) {
  const scene = new THREE.Scene();

  // ライト
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(1, 1, 1);
  scene.add(light);

  // 渡されたオブジェクトを追加
  scene.add(object3d);

  return { scene, mesh: object3d };
}

export { renderer, camera };