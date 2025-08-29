import * as THREE from "three";

export function createCube() {
  const geometry = new THREE.PlaneGeometry(300, 300, 32, 32);

  const texture = new THREE.TextureLoader().load('images/mike_alpha_1024.png');
  const material = new THREE.MeshStandardMaterial({ 
    map: texture,
    side: THREE.DoubleSide
   });
  return new THREE.Mesh(geometry, material);
}