import * as THREE from "three";

const CHARACTER_GROUND_OFFSET_Y = 2.3;

export class GameClass {
  constructor(gameContext) {
    this.gameContext = gameContext;
    this.scene = gameContext.scene;
    this.camera = gameContext.camera;

    this.ground = null;
    this.podium = null;
    this.podiumParts = {};
    this.menuCharacterSettings = {
      desktopSpacing: 1.76,
      mobileSpacing: 1.52,
    };
    this.podiumSettings = {
      x: 0,
      y: 0,
      z: 0,
      topWidth: 8.38,
      topDepth: 7.78,
      topHeight: 0.47,
      topRounding: 0,
      baseWidth: 10.62,
      baseDepth: 10.46,
      baseHeight: 0.41,
      baseRounding: 0,
      baseDrop: 0.27,
      lowerWidth: 12.45,
      lowerDepth: 12,
      lowerHeight: 0.35,
      lowerRounding: 0,
      rimLift: -0.025,
      rimThickness: 0.069,
      topColor: '#c89bff',
      sideColor: '#8b55e8',
      lowerColor: '#6b35ca',
      rimColor: '#fbd5fb',
      roughness: 1,
      metalness: 0,
      glow: 5,
      shadowOpacity: 0.07,
      shadowScale: 1.01,
    };

    this.options = {
      size: { w: 10, h: 10, d: 0.2 },
      name: 'ground'
    };
    this.characters = [];
    this.flyingCharacters = [];
    this.eyeTrackingEnabled = true;
    this.mouseNdc = new THREE.Vector2(0, 0);
    this.mouseWorldPosition = new THREE.Vector3(0, 0.5, 1.2);
    this.mouseLookPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.2);
    this.raycaster = new THREE.Raycaster();
    this._focusCharacterWorld = new THREE.Vector3();
    this._focusSecondEyeWorld = new THREE.Vector3();
    this._focusFlyWorld = new THREE.Vector3();
    this._focusBestFlyWorld = new THREE.Vector3();
    this._focusCharacterProjection = new THREE.Vector3();
    this._focusFlyProjection = new THREE.Vector3();
    this._layoutProjection = new THREE.Vector3();
    this.currentSceneMode = 'menu';
    this.currentScreenId = 'main_screen';
    this.applySceneLayout = this.applySceneLayout.bind(this);

    window.addEventListener('resize', () => {
      this.applySceneLayout(this.currentScreenId);
    });
    window.addEventListener('pointermove', (event) => {
      this.updateMouseLookTarget(event);
    }, { passive: true });
    window.addEventListener('pointerdown', (event) => {
      this.handleFlyingCharacterClick(event);
    }, { passive: true });
  }

  loadMesh() {
    let geometryPlane = new THREE.CircleGeometry(this.options.size.w / 2, 96);
    let materialPlane = new THREE.MeshStandardMaterial({
      color: 0x7f66ec,
      roughness: 0.72,
      metalness: 0.04,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.72,
    });
    this.ground = new THREE.Mesh(geometryPlane, materialPlane);
    this.ground.userData = { ...this.options };
    this.ground.rotateX(Math.PI / 2);
    this.ground.position.y = -2.2;
    this.ground.receiveShadow = true;
    this.scene.add(this.ground);

    this.podium = new THREE.Group();
    this.podium.userData = { name: 'menu-podium' };

    const topMaterial = new THREE.MeshPhysicalMaterial({
      clearcoat: 0.75,
      clearcoatRoughness: 0.18,
    });
    const sideMaterial = new THREE.MeshPhysicalMaterial({
      clearcoat: 0.55,
      clearcoatRoughness: 0.24,
    });
    const lowerMaterial = new THREE.MeshPhysicalMaterial({
      clearcoat: 0.35,
      clearcoatRoughness: 0.3,
    });
    const rimMaterial = new THREE.MeshStandardMaterial({
      emissive: 0xffffff,
      toneMapped: false,
    });
    const shadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x2d126f,
      transparent: true,
      depthWrite: false,
    });

    const top = new THREE.Mesh(this.createPodiumLayerGeometry(this.podiumSettings.topRounding), topMaterial);
    const base = new THREE.Mesh(this.createPodiumLayerGeometry(this.podiumSettings.baseRounding), sideMaterial);
    const lower = new THREE.Mesh(this.createPodiumLayerGeometry(this.podiumSettings.lowerRounding), lowerMaterial);
    const rim = new THREE.Mesh(new THREE.TorusGeometry(1, 0.018, 16, 128), rimMaterial);
    const shadow = new THREE.Mesh(new THREE.CircleGeometry(1, 128), shadowMaterial);

    rim.rotation.x = Math.PI / 2;
    shadow.rotation.x = -Math.PI / 2;
    top.receiveShadow = true;
    base.receiveShadow = true;
    lower.receiveShadow = true;

    this.podium.add(shadow, lower, base, top, rim);
    this.podiumParts = {
      top,
      base,
      lower,
      rim,
      shadow,
      topMaterial,
      sideMaterial,
      lowerMaterial,
      rimMaterial,
      shadowMaterial,
    };
    top.userData.rounding = this.podiumSettings.topRounding;
    base.userData.rounding = this.podiumSettings.baseRounding;
    lower.userData.rounding = this.podiumSettings.lowerRounding;
    this.scene.add(this.podium);
    this.applyPodiumSettings();

  }

  getSceneLayout(screenId) {
    const width = window.innerWidth || 1;
    const height = window.innerHeight || 1;
    const aspect = width / height;
    const isNarrow = aspect < 1;
    const isShort = height < 720;
    const menuCamera = (() => {
      if (isNarrow) {
        return {
          cameraPosition: new THREE.Vector3(0.943, -6.359, 17.031),
          target: new THREE.Vector3(0, -1.08, 0),
        };
      }

      if (width >= 2400 || aspect >= 1.95) {
        return {
          cameraPosition: new THREE.Vector3(-1.483, 5.887, 41.56),
          target: new THREE.Vector3(0.421, -0.698, 0.046),
        };
      }

      if (width >= 1600) {
        return {
          cameraPosition: new THREE.Vector3(2.537, 3.436, 37.68),
          target: new THREE.Vector3(0, -0.54, 0),
        };
      }

      return {
        cameraPosition: new THREE.Vector3(1.598, 3.724, 41.829),
        target: new THREE.Vector3(0, -0.54, 0),
      };
    })();

    const layouts = {
      menu: {
        cameraPosition: menuCamera.cameraPosition,
        target: menuCamera.target,
        characterSpacing: isNarrow
          ? this.menuCharacterSettings.mobileSpacing
          : this.menuCharacterSettings.desktopSpacing,
        characterZ: isNarrow ? 0.55 : 0.42,
        groundScale: new THREE.Vector3(isNarrow ? 0.92 : 1.14, isNarrow ? 0.7 : 0.82, 1),
        groundPosition: new THREE.Vector3(0, isNarrow ? -6.35 : (isShort ? -3.92 : -3.72), isNarrow ? 0.58 : 0.42),
        podiumScale: new THREE.Vector3(isNarrow ? 0.72 : 1, 1, isNarrow ? 0.78 : 1),
      },
      choice: {
        cameraPosition: new THREE.Vector3(0, isShort ? 4.1 : 4.2, menuCamera.cameraPosition.z),
        target: new THREE.Vector3(0, isNarrow ? -0.72 : -1.18, 0),
        characterSpacing: isNarrow ? 1.8 : 1.74,
        characterZ: 0.25,
        groundScale: new THREE.Vector3(isNarrow ? 0.9 : 0.78, isNarrow ? 0.62 : 0.48, 1),
        groundPosition: new THREE.Vector3(0, isNarrow ? -2.25 : -2.4, 0.25),
        podiumScale: new THREE.Vector3(isNarrow ? 0.72 : 1, 1, isNarrow ? 0.78 : 1),
      },
      background: {
        cameraPosition: new THREE.Vector3(0, 4.6, isNarrow ? 34 : 31),
        target: new THREE.Vector3(0, -1.4, 0),
        characterSpacing: isNarrow ? 1.27 : 1.58,
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
    this.currentScreenId = screenId;
    this.currentSceneMode = layout.mode;
    const charactersVisible = screenId !== 'categories_screen'
      && screenId !== 'guess_categories_screen';
    const podiumVisible = charactersVisible
      && (layout.mode === 'menu' || layout.mode === 'choice');

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
      this.ground.visible = layout.mode === 'background' && charactersVisible;
      this.ground.position.copy(groundPosition);
      this.ground.scale.copy(layout.groundScale);
    }

    if (this.podium) {
      this.podium.visible = podiumVisible;
      this.podium.position.set(
        groundPosition.x + this.podiumSettings.x,
        groundPosition.y + this.podiumSettings.y,
        groundPosition.z + this.podiumSettings.z,
      );
      this.podium.scale.copy(layout.podiumScale || new THREE.Vector3(0.86, 1, 0.36));
      this.applyPodiumSettings();
    }

    const center = (this.characters.length - 1) / 2;
    const characterY = this.getCharacterBaseY(layout, sceneOffsetY);
    this.characters.forEach((character, index) => {
      if (!character.characterGroup) return;

      character.characterGroup.visible = charactersVisible;
      character.characterGroup.position.x = (index - center) * layout.characterSpacing;
      character.characterGroup.position.y = characterY;
      character.characterGroup.position.z = layout.characterZ;
    });

    this.flyingCharacters.forEach((character) => {
      character.setLayout(layout, characterY, charactersVisible);
    });
  }

  createPodiumLayerGeometry(rounding = 0) {
    const shape = new THREE.Shape();
    shape.absellipse(0, 0, 1, 1, 0, Math.PI * 2, false, 0);

    const bevel = THREE.MathUtils.clamp(rounding, 0, 0.35);
    const geometry = new THREE.ExtrudeGeometry(shape, {
      depth: 1,
      curveSegments: 96,
      steps: 1,
      bevelEnabled: bevel > 0,
      bevelSegments: 5,
      bevelSize: bevel,
      bevelThickness: bevel,
    });

    geometry.center();
    geometry.rotateX(-Math.PI / 2);
    geometry.computeBoundingBox();

    const size = new THREE.Vector3();
    geometry.boundingBox.getSize(size);
    geometry.scale(
      2 / (size.x || 1),
      1 / (size.y || 1),
      2 / (size.z || 1),
    );
    geometry.computeVertexNormals();
    return geometry;
  }

  updatePodiumLayerGeometry(mesh, rounding) {
    if (!mesh || mesh.userData.rounding === rounding) return;

    mesh.geometry.dispose();
    mesh.geometry = this.createPodiumLayerGeometry(rounding);
    mesh.userData.rounding = rounding;
  }

  applyPodiumSettings() {
    if (!this.podium || !this.podiumParts.top) return;

    const settings = this.podiumSettings;
    const {
      top,
      base,
      lower,
      rim,
      shadow,
      topMaterial,
      sideMaterial,
      lowerMaterial,
      rimMaterial,
      shadowMaterial,
    } = this.podiumParts;

    const surfaceY = 0.1;

    this.updatePodiumLayerGeometry(top, settings.topRounding);
    this.updatePodiumLayerGeometry(base, settings.baseRounding);
    this.updatePodiumLayerGeometry(lower, settings.lowerRounding);

    top.scale.set(settings.topWidth / 2, settings.topHeight, settings.topDepth / 2);
    top.position.y = surfaceY - settings.topHeight / 2;

    base.scale.set(settings.baseWidth / 2, settings.baseHeight, settings.baseDepth / 2);
    base.position.y = surfaceY - settings.topHeight - settings.baseHeight / 2;

    lower.scale.set(settings.lowerWidth / 2, settings.lowerHeight, settings.lowerDepth / 2);
    lower.position.y = surfaceY - settings.topHeight - settings.baseHeight - settings.baseDrop;

    rim.scale.set(
      settings.topWidth / 2 * 0.99,
      settings.topDepth / 2 * 0.99,
      settings.rimThickness / 0.018,
    );
    rim.position.y = surfaceY + settings.rimLift;

    shadow.scale.set(
      settings.lowerWidth / 2 * settings.shadowScale,
      settings.lowerDepth / 2 * settings.shadowScale,
      1,
    );
    shadow.position.y = lower.position.y - settings.lowerHeight / 2 - 0.03;

    topMaterial.color.set(settings.topColor);
    sideMaterial.color.set(settings.sideColor);
    lowerMaterial.color.set(settings.lowerColor);
    rimMaterial.color.set(settings.rimColor);
    rimMaterial.emissive.set(settings.rimColor);
    rimMaterial.emissiveIntensity = settings.glow;
    shadowMaterial.opacity = settings.shadowOpacity;

    [topMaterial, sideMaterial, lowerMaterial].forEach((material) => {
      material.roughness = settings.roughness;
      material.metalness = settings.metalness;
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

    const isMenu = layout.mode === 'menu';
    const minGap = isMenu
      ? (window.innerHeight < 720 ? 18 : 34)
      : (window.innerHeight < 720 ? 28 : 44);
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
    this.flyingCharacters.forEach((character) => character.update(delta));
  }

  getSpectatorFocusTarget(character) {
    if (!this.eyeTrackingEnabled) return null;

    if (!character?.characterGroup || !this.camera) return this.mouseWorldPosition;

    if (character.eyes?.[0] && character.eyes?.[1]) {
      character.eyes[0].getWorldPosition(this._focusCharacterWorld);
      character.eyes[1].getWorldPosition(this._focusSecondEyeWorld);
      this._focusCharacterWorld.lerp(this._focusSecondEyeWorld, 0.5);
    } else {
      character.characterGroup.getWorldPosition(this._focusCharacterWorld);
    }

    this.camera.updateMatrixWorld();
    this._focusCharacterProjection.copy(this._focusCharacterWorld).project(this.camera);

    const attentionRadius = 350;
    let closestDistance = Infinity;
    let hasNearbyFlyer = false;

    this.flyingCharacters.forEach((flyingCharacter) => {
      if (!flyingCharacter.group?.visible) return;

      flyingCharacter.group.getWorldPosition(this._focusFlyWorld);
      this._focusFlyProjection.copy(this._focusFlyWorld).project(this.camera);
      const distanceX = (this._focusFlyProjection.x - this._focusCharacterProjection.x)
        * window.innerWidth * 0.5;
      const distanceY = (this._focusFlyProjection.y - this._focusCharacterProjection.y)
        * window.innerHeight * 0.5;
      const screenDistance = Math.hypot(distanceX, distanceY);

      if (screenDistance < attentionRadius && screenDistance < closestDistance) {
        closestDistance = screenDistance;
        hasNearbyFlyer = true;
        this._focusBestFlyWorld.copy(this._focusFlyWorld);
      }
    });

    return hasNearbyFlyer ? this._focusBestFlyWorld : this.mouseWorldPosition;
  }

  handleFlyingCharacterClick(event) {
    if (event.button !== undefined && event.button !== 0) return;
    if (event.target instanceof Element
      && event.target.closest('button, a, input, textarea, select, [role="button"], [onclick]')) {
      return;
    }

    this.mouseNdc.set(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1,
    );
    this.camera.updateMatrixWorld();
    this.scene.updateMatrixWorld(true);
    this.raycaster.setFromCamera(this.mouseNdc, this.camera);

    const visibleCharacters = this.flyingCharacters.filter((character) => character.group?.visible);
    const intersections = this.raycaster.intersectObjects(
      visibleCharacters.map((character) => character.group),
      true,
    );
    if (!intersections.length) return;

    const clickedCharacter = visibleCharacters.find((character) => {
      let object = intersections[0].object;
      while (object) {
        if (object === character.group) return true;
        object = object.parent;
      }
      return false;
    });

    clickedCharacter?.redirectFlight();
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
