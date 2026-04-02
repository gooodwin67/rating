import * as THREE from "three";

export class GameClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;

    this.ground = null;

    this.options = {
      size: { w: 10, h: 10, d: 0.2 },
      name: 'ground'
    };
    this.characters = [];
    this.dot = null;
    this.dotBasePosition = new THREE.Vector3(-4.2, 0.8, 0.3);
    this.dotTime = 0;
    this.eyeTrackingEnabled = true;
    this._dotWorldPosition = new THREE.Vector3();
  }

  loadMesh() {
    let geometryPlane = new THREE.BoxGeometry(this.options.size.w, this.options.size.h, this.options.size.d);
    let materialPlane = new THREE.MeshPhongMaterial({ color: 0x9E91FA, side: THREE.DoubleSide });
    this.ground = new THREE.Mesh(geometryPlane, materialPlane);
    this.ground.userData = { ...this.options };
    this.ground.rotateX(Math.PI / 2);
    this.ground.position.y = -2.2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    let geometryDot = new THREE.SphereGeometry(0.2);
    let materialDot = new THREE.MeshPhongMaterial({ color: 0x9E91FA, side: THREE.DoubleSide });
    this.dot = new THREE.Mesh(geometryDot, materialDot);
    this.dot.userData = { ...this.options };
    this.dot.position.copy(this.dotBasePosition);
    this.scene.add(this.dot);
  }

  update(delta, isRoundActive = false) {
    if (!this.dot || !this.eyeTrackingEnabled) return;

    this.dotTime += delta;

    const x = this.dotBasePosition.x + Math.sin(this.dotTime * 0.9) * 7.1;
    const y = this.dotBasePosition.y + Math.sin(this.dotTime * 1.6) * 0.7 + Math.cos(this.dotTime * 0.55) * 10.45;
    const z = this.dotBasePosition.z + Math.cos(this.dotTime * 1.15) * 0.75 + 1;

    this.dot.position.set(x, y, z);
  }

  getSpectatorFocusTarget() {
    if (!this.dot || !this.eyeTrackingEnabled) return null;
    return this.dot.getWorldPosition(this._dotWorldPosition);
  }

}

