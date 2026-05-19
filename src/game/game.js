import * as THREE from "three";

const CHARACTER_GROUND_OFFSET_Y = 2.3;

export class GameClass {
  constructor(gameContext) {
    this.gameContext = gameContext;
    this.scene = gameContext.scene;
    this.camera = gameContext.camera;

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
    this.eyeTrackingMode = 'dot';
    this.mouseNdc = new THREE.Vector2(0, 0);
    this.mouseWorldPosition = new THREE.Vector3(0, 0.5, 1.2);
    this.mouseLookPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.2);
    this.raycaster = new THREE.Raycaster();
    this._dotWorldPosition = new THREE.Vector3();
    this._layoutProjection = new THREE.Vector3();
    this.currentSceneMode = 'menu';
    this.applySceneLayout = this.applySceneLayout.bind(this);

    window.addEventListener('resize', () => {
      this.applySceneLayout(this.currentSceneMode);
    });
    window.addEventListener('pointermove', (event) => {
      this.updateMouseLookTarget(event);
    }, { passive: true });
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

  getSceneLayout(screenId) {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;
    const aspect = width / height;
    const isNarrow = aspect < 1;
    const isShort = height < 720;

    const layouts = {
      menu: {
        cameraPosition: new THREE.Vector3(0, isShort ? 4.8 : 4.2, isNarrow ? 34 : 30),
        target: new THREE.Vector3(0, -0.35, 0),
        characterSpacing: isNarrow ? 1.35 : 1.65,
        characterZ: 0.45,
        groundScale: new THREE.Vector3(isNarrow ? 0.82 : 1.08, isShort ? 0.85 : 1, 1),
        groundPosition: new THREE.Vector3(0, isShort ? -3.55 : -3.25, 0.45),
      },
      choice: {
        cameraPosition: new THREE.Vector3(0, isShort ? 3.85 : 3.95, isNarrow ? 5 : 28),
        target: new THREE.Vector3(0, isNarrow ? -0.45 : -0.95, 0),
        characterSpacing: isNarrow ? 1.65 : 1.55,
        characterZ: 0.25,
        groundScale: new THREE.Vector3(isNarrow ? 1.18 : 1, isNarrow ? 1.22 : 0.9, 1),
        groundPosition: new THREE.Vector3(0, isNarrow ? -1.9 : -1.9, 0.25),
      },
      background: {
        cameraPosition: new THREE.Vector3(0, 4.6, isNarrow ? 34 : 31),
        target: new THREE.Vector3(0, -1.4, 0),
        characterSpacing: isNarrow ? 1.15 : 1.45,
        characterZ: 0.6,
        groundScale: new THREE.Vector3(isNarrow ? 0.72 : 0.9, 0.82, 1),
        groundPosition: new THREE.Vector3(0, -2.2, 0.55),
      },
    };

    if (
      screenId === 'choice'
      || screenId === 'choice_screen'
      || screenId === 'session_complete_screen'
      || screenId === 'guess_screen'
      || screenId === 'guess_complete_screen'
    ) {
      return { mode: 'choice', ...layouts.choice };
    }

    if (
      screenId === 'background'
      || screenId === 'categories_screen'
      || screenId === 'guess_categories_screen'
      || screenId === 'settings_screen'
    ) {
      return { mode: 'background', ...layouts.background };
    }

    return { mode: 'menu', ...layouts.menu };
  }

  applySceneLayout(screenId = this.currentSceneMode) {
    const layout = this.getSceneLayout(screenId);
    this.currentSceneMode = layout.mode;

    if (this.camera) {
      this.camera.position.copy(layout.cameraPosition);
      this.camera.lookAt(layout.target);
    }

    const controls = this.gameContext.initClass?.controls;
    if (controls) {
      controls.target.copy(layout.target);
      controls.update();
    }

    const sceneOffsetY = this.getSceneClearanceOffset(layout);
    const groundPosition = layout.groundPosition.clone();
    groundPosition.y += sceneOffsetY;

    if (this.ground) {
      this.ground.position.copy(groundPosition);
      this.ground.scale.copy(layout.groundScale);
    }

    const center = (this.characters.length - 1) / 2;
    const characterY = this.getCharacterBaseY(layout, sceneOffsetY);
    this.characters.forEach((character, index) => {
      if (!character.characterGroup) return;

      character.characterGroup.position.x = (index - center) * layout.characterSpacing;
      character.characterGroup.position.y = characterY;
      character.characterGroup.position.z = layout.characterZ;
    });
  }

  getActiveUiBottom() {
    const activeScreen = document.querySelector('.screen.active');
    if (!activeScreen) return 0;

    const shell = activeScreen.querySelector('.menu-shell, .panel-shell');
    if (!shell) return 0;

    return shell.getBoundingClientRect().bottom;
  }

  getCharacterBaseY(layout, offsetY = 0) {
    return layout.groundPosition.y + offsetY + CHARACTER_GROUND_OFFSET_Y;
  }

  getTallestCharacterTopY(baseCharacterY) {
    if (!this.characters.length) return baseCharacterY;

    return this.characters.reduce((maxTop, character) => {
      const bodyHeight = character.heightBody ?? 4.2;
      const scaleY = character.savedScaleY ?? 1;
      const bodyTop = bodyHeight * scaleY - 2.2;
      return Math.max(maxTop, baseCharacterY + bodyTop);
    }, baseCharacterY);
  }

  projectWorldYToScreen(worldY, worldZ) {
    if (!this.camera) return window.innerHeight;

    this.camera.updateMatrixWorld();
    this._layoutProjection.set(0, worldY, worldZ).project(this.camera);
    return (1 - this._layoutProjection.y) * 0.5 * window.innerHeight;
  }

  getSceneClearanceOffset(layout) {
    const uiBottom = this.getActiveUiBottom();
    if (!uiBottom || !this.camera) return 0;

    const minGap = window.innerHeight < 720 ? 28 : 44;
    const requiredTop = uiBottom + minGap;
    let offsetY = 0;

    for (let i = 0; i < 80; i += 1) {
      const characterTopY = this.getTallestCharacterTopY(this.getCharacterBaseY(layout, offsetY));
      const projectedTop = this.projectWorldYToScreen(characterTopY, layout.characterZ);

      if (projectedTop >= requiredTop) break;
      offsetY -= 0.08;
    }

    return offsetY;
  }

  update(delta, isRoundActive = false) {
    if (!this.dot) return;

    this.dotTime += delta;

    const x = this.dotBasePosition.x + Math.sin(this.dotTime * 0.9) * 7.1;
    const y = this.dotBasePosition.y + Math.sin(this.dotTime * 1.6) * 0.7 + Math.cos(this.dotTime * 0.55) * 10.45;
    const z = this.dotBasePosition.z + Math.cos(this.dotTime * 1.15) * 0.75 + 1;

    this.dot.position.set(x, y, z);
  }

  getSpectatorFocusTarget() {
    if (!this.eyeTrackingEnabled) return null;

    if (this.eyeTrackingMode === 'mouse') {
      return this.mouseWorldPosition;
    }

    if (!this.dot) return null;
    return this.dot.getWorldPosition(this._dotWorldPosition);
  }

  updateMouseLookTarget(event) {
    if (!this.camera) return;

    this.mouseNdc.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
    );

    this.raycaster.setFromCamera(this.mouseNdc, this.camera);
    this.raycaster.ray.intersectPlane(this.mouseLookPlane, this.mouseWorldPosition);
  }

}
