import * as THREE from "three";

export class WorldClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;

    this.dirLight = null;
    this.ambientLight = null;
    this.fillLight = null;
    this.rimLight = null;
  }

  loadLight(ambient = true, dir = true) {

    this.ambientLight = new THREE.AmbientLight(0xded6ff, 1.25);


    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.55);
    this.dirLight.position.set(-4, 7, 4);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.far = 100;
    this.dirLight.shadow.mapSize.set(2048, 2048);

    this.fillLight = new THREE.HemisphereLight(0xffd8ff, 0x3d249a, 1.25);

    this.rimLight = new THREE.DirectionalLight(0x9edbff, 0.9);
    this.rimLight.position.set(5, 4, -5);

    if (ambient) this.scene.add(this.ambientLight)
    if (dir) {
      this.scene.add(this.dirLight)
      this.scene.add(this.fillLight)
      this.scene.add(this.rimLight)
    }


  }

}

