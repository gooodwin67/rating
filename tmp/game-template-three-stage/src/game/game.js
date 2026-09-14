import * as THREE from 'three';

export class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.running = false;
    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.camera.position.set(0, 1.2, 5);
    this.scene.add(new THREE.HemisphereLight(0xa8c7ff, 0x201342, 2.2));

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(3, 5, 4);
    this.scene.add(keyLight);

    const geometry = new THREE.IcosahedronGeometry(1.15, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7f6bff,
      roughness: 0.28,
      metalness: 0.2,
      emissive: 0x21124f,
    });
    this.hero = new THREE.Mesh(geometry, material);
    this.scene.add(this.hero);

    this._resize = this.resize.bind(this);
    this._frame = this.frame.bind(this);
    window.addEventListener('resize', this._resize, { passive: true });
    window.visualViewport?.addEventListener('resize', this._resize, { passive: true });
    this.resize();
  }

  async load() {
    // Загружайте модели, текстуры и звуки здесь и дожидайтесь Promise.all.
    await Promise.resolve();
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.clock.start();
    requestAnimationFrame(this._frame);
  }

  pause() {
    this.running = false;
    this.clock.stop();
  }

  resume() {
    if (document.visibilityState !== 'visible') return;
    this.start();
  }

  frame() {
    if (!this.running) return;
    const delta = Math.min(this.clock.getDelta(), 0.05);
    this.hero.rotation.x += delta * 0.22;
    this.hero.rotation.y += delta * 0.5;
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this._frame);
  }

  resize() {
    const width = Math.max(1, this.canvas.clientWidth);
    const height = Math.max(1, this.canvas.clientHeight);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }
}

