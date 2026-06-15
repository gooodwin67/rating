import * as THREE from "three";

export class WorldClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;

    this.dirLight = null;
    this.ambientLight = null;
    this.fillLight = null;
    this.rimLight = null;
    this.shadowSettings = {
      radius: 12.8,
      blurSamples: 28,
      bias: -0.0106,
      normalBias: 0.126,
      mapSize: 1024,
    };
  }

  loadLight(ambient = true, dir = true) {

    this.ambientLight = new THREE.AmbientLight(0xded6ff, 1.25);


    this.dirLight = new THREE.DirectionalLight(0xffffff, 1.55);
    this.dirLight.position.set(-4, 7, 4);
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.near = 0.5;
    this.dirLight.shadow.camera.far = 100;
    this.dirLight.shadow.camera.left = -7;
    this.dirLight.shadow.camera.right = 7;
    this.dirLight.shadow.camera.top = 7;
    this.dirLight.shadow.camera.bottom = -7;
    this.applyShadowSettings();

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

  applyShadowSettings() {
    if (!this.dirLight) return;

    const settings = this.shadowSettings;
    this.dirLight.shadow.radius = settings.radius;
    this.dirLight.shadow.blurSamples = Math.round(settings.blurSamples);
    this.dirLight.shadow.bias = settings.bias;
    this.dirLight.shadow.normalBias = settings.normalBias;

    const mapSize = Math.round(settings.mapSize);
    if (
      this.dirLight.shadow.mapSize.width !== mapSize
      || this.dirLight.shadow.mapSize.height !== mapSize
    ) {
      this.dirLight.shadow.mapSize.set(mapSize, mapSize);
      this.dirLight.shadow.map?.dispose();
      this.dirLight.shadow.map = null;
    }

    this.dirLight.shadow.needsUpdate = true;
  }

}

