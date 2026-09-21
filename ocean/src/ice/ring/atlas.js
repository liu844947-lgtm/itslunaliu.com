import * as THREE from 'three';
import { IMAGE_FILES } from './projects';

// Keep the original atlas orientation/color contract, with intentionally blank art.
export function buildAtlas(files = IMAGE_FILES, onProgress) {
  const cols = 4, rows = Math.ceil(files.length / cols);
  const canvas = document.createElement('canvas');
  canvas.width = cols * 512;
  canvas.height = rows * 341;
  const ctx = canvas.getContext('2d');
  files.forEach((_, index) => {
    ctx.fillStyle = '#0756b8';
    ctx.fillRect(index % cols * 512, Math.floor(index / cols) * 341, 512, 341);
  });
  const texture = new THREE.CanvasTexture(canvas);
  texture.flipY = false;
  texture.colorSpace = THREE.NoColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.needsUpdate = true;
  onProgress?.(1);
  return { texture, grid: [cols, rows], count: files.length, first: Promise.resolve(), ready: Promise.resolve() };
}
