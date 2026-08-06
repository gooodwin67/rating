import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

const WING_TILT_X = THREE.MathUtils.degToRad(70);

function roundedBlock(width, height, depth, radius, material) {
  const mesh = new THREE.Mesh(
    new RoundedBoxGeometry(width, height, depth, 4, radius),
    material,
  );
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

function makeMaterial(color, options = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: 0.56,
    metalness: 0.02,
    ...options,
  });
}

function createInsectWing(side, wingMaterial) {
  const group = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.16, 0.3, 0.56, 0.55, 0.88, 0.43);
  shape.bezierCurveTo(1.08, 0.35, 1.08, 0.12, 0.84, -0.01);
  shape.bezierCurveTo(0.58, -0.15, 0.19, -0.12, 0, 0);

  const surface = new THREE.Mesh(new THREE.ShapeGeometry(shape, 32), wingMaterial);
  surface.renderOrder = 1;
  group.add(surface);

  const veinMaterial = new THREE.LineBasicMaterial({
    color: 0x91c9d0,
    transparent: true,
    opacity: 0.52,
  });
  const outline = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(shape.getPoints(40)),
    veinMaterial,
  );
  outline.position.z = 0.012;
  group.add(outline);

  [
    [new THREE.Vector3(0.04, 0.01, 0.014), new THREE.Vector3(0.72, 0.31, 0.014)],
    [new THREE.Vector3(0.16, 0.02, 0.014), new THREE.Vector3(0.82, 0.05, 0.014)],
    [new THREE.Vector3(0.43, 0.16, 0.014), new THREE.Vector3(0.55, -0.08, 0.014)],
  ].forEach((points) => {
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), veinMaterial));
  });

  group.scale.x = side;
  return group;
}

export class FlyCharacterClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;
    this.camera = gameContext.camera;
    this.group = new THREE.Group();
    this.model = new THREE.Group();
    this.group.add(this.model);
    this.scene.add(this.group);

    this.time = Math.random() * Math.PI * 2;
    this.visible = true;
    this.turnY = 0;
    this.bankZ = 0;
    this.flightPlaneZ = 1;
    this.flightCurve = null;
    this.flightProgress = 0;
    this.flightDuration = 4;
    this.layoutMode = null;
    this.flightPosition = new THREE.Vector3();
    this.flightTangent = new THREE.Vector3(1, 0, 0);
    this.leftWing = null;
    this.rightWing = null;
    this.pupils = [];
    this.pupilBaseX = [-0.355, 0.265];
    this.pupilBaseY = 0.18;
    this.legs = [];
    this.antennae = [];
  }

  loadCharacter() {
    const yellow = makeMaterial(0xf6c84f);
    const yellowLight = makeMaterial(0xffdc6b);
    const brown = makeMaterial(0x684836);
    const dark = makeMaterial(0x3f302b);
    const eye = makeMaterial(0x372a2a);
    const white = new THREE.MeshBasicMaterial({ color: 0xfffbef });
    const blush = new THREE.MeshBasicMaterial({
      color: 0xff8f8c,
      transparent: true,
      opacity: 0.68,
    });
    const wing = new THREE.MeshPhysicalMaterial({
      color: 0xe5fbff,
      transparent: true,
      opacity: 0.72,
      roughness: 0.22,
      transmission: 0.06,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const body = roundedBlock(1.22, 0.82, 1.32, 0.16, yellow);
    body.position.z = -0.12;
    this.model.add(body);

    [-0.08, -0.48].forEach((z) => {
      const stripe = roundedBlock(1.25, 0.85, 0.18, 0.05, brown);
      stripe.position.z = z;
      this.model.add(stripe);
    });

    const face = roundedBlock(1.15, 0.75, 0.13, 0.12, yellowLight);
    face.position.z = 0.61;
    this.model.add(face);

    const eyeGeometry = new RoundedBoxGeometry(0.25, 0.28, 0.1, 3, 0.055);
    const pupilGeometry = new RoundedBoxGeometry(0.09, 0.1, 0.04, 2, 0.025);
    [-0.31, 0.31].forEach((x) => {
      const eyeBlock = new THREE.Mesh(eyeGeometry, eye);
      eyeBlock.position.set(x, 0.13, 0.72);
      this.model.add(eyeBlock);

      const pupil = new THREE.Mesh(pupilGeometry, white);
      pupil.position.set(x - 0.045, 0.18, 0.79);
      this.pupils.push(pupil);
      this.model.add(pupil);
    });

    [-0.45, 0.45].forEach((x) => {
      const cheek = roundedBlock(0.18, 0.1, 0.035, 0.035, blush);
      cheek.position.set(x, -0.13, 0.695);
      cheek.castShadow = false;
      this.model.add(cheek);
    });

    const mouthCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.12, -0.12, 0.755),
      new THREE.Vector3(0, -0.2, 0.77),
      new THREE.Vector3(0.12, -0.12, 0.755),
    );
    this.model.add(new THREE.Mesh(
      new THREE.TubeGeometry(mouthCurve, 12, 0.018, 7, false),
      dark,
    ));

    const antennaGeometry = new RoundedBoxGeometry(0.055, 0.3, 0.055, 2, 0.018);
    [-0.28, 0.28].forEach((x, index) => {
      const antennaPivot = new THREE.Group();
      antennaPivot.position.set(x, 0.42, 0.37);

      const antenna = new THREE.Mesh(antennaGeometry, dark);
      antenna.position.y = 0.15;
      antennaPivot.add(antenna);

      const tip = roundedBlock(0.12, 0.12, 0.12, 0.035, brown);
      tip.position.set(0, 0.34, 0);
      antennaPivot.add(tip);

      const baseRotation = x < 0 ? -0.16 : 0.16;
      antennaPivot.rotation.z = baseRotation;
      antennaPivot.userData.baseRotation = baseRotation;
      antennaPivot.userData.phase = index * Math.PI;
      this.antennae.push(antennaPivot);
      this.model.add(antennaPivot);
    });

    this.leftWing = createInsectWing(-1, wing);
    this.rightWing = createInsectWing(1, wing);
    this.leftWing.position.set(-0.38, 0.25, -0.4);
    this.rightWing.position.set(0.38, 0.25, -0.4);
    this.leftWing.rotation.x = WING_TILT_X;
    this.rightWing.rotation.x = WING_TILT_X;
    this.leftWing.rotation.z = -0.38;
    this.rightWing.rotation.z = 0.38;
    this.model.add(this.leftWing, this.rightWing);

    const legGeometry = new RoundedBoxGeometry(0.13, 0.32, 0.13, 3, 0.04);
    [-1, 1].forEach((side) => {
      [-0.42, -0.08, 0.26].forEach((z, row) => {
        const leg = new THREE.Mesh(legGeometry, dark);
        leg.position.set(side * (0.34 + row * 0.035), -0.53, z);
        const baseRotation = side * -0.14;
        leg.rotation.z = baseRotation;
        leg.userData.side = side;
        leg.userData.row = row;
        leg.userData.baseRotation = baseRotation;
        this.legs.push(leg);
        this.model.add(leg);
      });
    });

    const stinger = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.3, 4), dark);
    stinger.rotation.x = Math.PI / 2;
    stinger.position.set(0, -0.02, -0.91);
    this.model.add(stinger);

    this.model.scale.setScalar(0.37);
  }

  screenPointToWorld(ndcX, ndcY) {
    this.camera.updateMatrixWorld();
    const point = new THREE.Vector3(ndcX, ndcY, 0.5).unproject(this.camera);
    const direction = point.sub(this.camera.position).normalize();
    const distance = (this.flightPlaneZ - this.camera.position.z) / direction.z;
    return this.camera.position.clone().add(direction.multiplyScalar(distance));
  }

  getRandomScreenPoint() {
    const marginX = window.innerWidth < 640 ? 0.12 : 0.08;
    const marginY = window.innerHeight < 640 ? 0.14 : 0.09;
    const depthRange = window.innerWidth < 640 ? 0.4 : 0.75;
    const x = THREE.MathUtils.lerp(-1 + marginX, 1 - marginX, Math.random());
    const y = THREE.MathUtils.lerp(-1 + marginY, 1 - marginY, Math.random());
    const point = this.screenPointToWorld(x, y);
    point.z += (Math.random() * 2 - 1) * depthRange;
    return point;
  }

  startRandomFlight(useCurrentPosition = true, incomingTangent = null) {
    const start = useCurrentPosition && this.flightCurve
      ? this.group.position.clone()
      : this.getRandomScreenPoint();
    let target = this.getRandomScreenPoint();

    for (let attempt = 0; attempt < 6 && start.distanceTo(target) < 2.2; attempt += 1) {
      target = this.getRandomScreenPoint();
    }

    const delta = target.clone().sub(start);
    const distance = Math.max(delta.length(), 0.01);
    const perpendicular = new THREE.Vector3(-delta.y, delta.x, 0).normalize();
    const bend = (Math.random() * 2 - 1) * Math.min(distance * 0.34, 2.8);
    const controlA = incomingTangent
      ? start.clone().addScaledVector(
        incomingTangent.clone().normalize(),
        Math.min(distance * 0.34, 3.2),
      )
      : start.clone()
        .addScaledVector(delta, 0.32)
        .addScaledVector(perpendicular, bend);
    const controlB = start.clone()
      .addScaledVector(delta, 0.7)
      .addScaledVector(perpendicular, -bend * 0.45);

    controlA.z += (Math.random() * 2 - 1) * 0.4;
    controlB.z += (Math.random() * 2 - 1) * 0.4;

    this.group.position.copy(start);
    this.flightCurve = new THREE.CubicBezierCurve3(start, controlA, controlB, target);
    this.flightProgress = 0;
    this.flightDuration = THREE.MathUtils.clamp(
      2.7 + distance * 0.24 + Math.random() * 1.6,
      3.2,
      7,
    );
  }

  redirectFlight() {
    if (!this.visible) return;

    const continuingTangent = this.flightCurve
      ? this.flightCurve.getTangent(THREE.MathUtils.clamp(this.flightProgress, 0, 1)).normalize()
      : this.flightTangent.clone().normalize();
    this.startRandomFlight(true, continuingTangent);
  }

  setLayout(layout, characterY, visible) {
    const wasVisible = this.visible;
    const previousMode = this.layoutMode;
    this.visible = visible;
    this.group.visible = visible;
    this.layoutMode = layout.mode;
    this.flightPlaneZ = layout.characterZ + 4.5;

    if (visible && (!wasVisible || previousMode !== layout.mode || !this.flightCurve)) {
      this.flightCurve = null;
      this.startRandomFlight(false);
    }
  }

  update(delta) {
    if (!this.visible) return;

    this.time += delta;
    if (!this.flightCurve) this.startRandomFlight(false);

    this.flightProgress += delta / this.flightDuration;
    if (this.flightProgress >= 1) {
      this.flightCurve.getPoint(1, this.flightPosition);
      const continuingTangent = this.flightCurve.getTangent(1).normalize();
      this.group.position.copy(this.flightPosition);
      this.startRandomFlight(true, continuingTangent);
    }

    const flightT = THREE.MathUtils.clamp(this.flightProgress, 0, 1);
    this.flightCurve.getPoint(flightT, this.flightPosition);
    this.flightCurve.getTangent(flightT, this.flightTangent).normalize();
    this.group.position.copy(this.flightPosition);

    const targetTurnY = THREE.MathUtils.clamp(this.flightTangent.x * 0.72, -0.5, 0.5);
    this.turnY = THREE.MathUtils.lerp(this.turnY, targetTurnY, Math.min(1, delta * 5));
    this.model.rotation.y = this.turnY;
    const targetBankZ = THREE.MathUtils.clamp(-this.flightTangent.y * 0.16, -0.14, 0.14);
    this.bankZ = THREE.MathUtils.lerp(this.bankZ, targetBankZ, Math.min(1, delta * 4));
    this.model.rotation.z = this.bankZ;

    const flap = (Math.sin(this.time * 26) * 0.5 + 0.5);
    this.leftWing.rotation.z = -0.28 - flap * 0.14;
    this.rightWing.rotation.z = 0.28 + flap * 0.14;
    this.leftWing.rotation.x = WING_TILT_X;
    this.rightWing.rotation.x = WING_TILT_X;
    this.leftWing.rotation.y = flap * 0.78;
    this.rightWing.rotation.y = -flap * 0.78;

    this.legs.forEach((leg) => {
      const { side, row, baseRotation } = leg.userData;
      const phase = row * 1.35 + (side < 0 ? Math.PI : 0);
      leg.rotation.x = Math.sin(this.time * 7.5 + phase) * 0.32;
      leg.rotation.z = baseRotation + Math.sin(this.time * 5.2 + phase) * 0.09;
    });

    this.antennae.forEach((antenna) => {
      antenna.rotation.z = antenna.userData.baseRotation
        + Math.sin(this.time * 4.2 + antenna.userData.phase) * 0.11;
      antenna.rotation.x = Math.cos(this.time * 3.6 + antenna.userData.phase) * 0.07;
    });

    const lookX = THREE.MathUtils.clamp(this.flightTangent.x * 0.045, -0.045, 0.045);
    const lookY = THREE.MathUtils.clamp(this.flightTangent.y * 0.025, -0.025, 0.025);
    this.pupils.forEach((pupil, index) => {
      pupil.position.x = this.pupilBaseX[index] + lookX;
      pupil.position.y = this.pupilBaseY + lookY;
    });
  }
}

export class BlockFlyCharacterClass extends FlyCharacterClass {
  loadCharacter() {
    const head = makeMaterial(0x78b4b8);
    const thorax = makeMaterial(0x425e68);
    const abdomen = makeMaterial(0x304751);
    const dark = makeMaterial(0x302c35);
    const compoundEye = makeMaterial(0xd86778);
    const pupilMaterial = makeMaterial(0x35262d);
    const glintMaterial = new THREE.MeshBasicMaterial({ color: 0xfff7ed });
    const wingMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc7edf2,
      transparent: true,
      opacity: 0.65,
      roughness: 0.24,
      transmission: 0.08,
      side: THREE.DoubleSide,
      depthWrite: false,
    });

    const abdomenBlock = roundedBlock(0.76, 0.65, 0.9, 0.18, abdomen);
    abdomenBlock.position.z = -0.4;
    this.model.add(abdomenBlock);

    const thoraxBlock = roundedBlock(0.98, 0.76, 0.72, 0.2, thorax);
    thoraxBlock.position.z = 0.03;
    this.model.add(thoraxBlock);

    const face = roundedBlock(0.94, 0.7, 0.14, 0.14, head);
    face.position.z = 0.46;
    this.model.add(face);

    const eyeGeometry = new RoundedBoxGeometry(0.34, 0.39, 0.11, 4, 0.11);
    const pupilGeometry = new RoundedBoxGeometry(0.105, 0.13, 0.045, 3, 0.035);
    this.pupilBaseX = [-0.31, 0.21];
    this.pupilBaseY = 0.08;
    [-0.27, 0.27].forEach((x, index) => {
      const eye = new THREE.Mesh(eyeGeometry, compoundEye);
      eye.position.set(x, 0.1, 0.56);
      this.model.add(eye);

      const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil.position.set(this.pupilBaseX[index], 0.08, 0.635);
      this.pupils.push(pupil);
      this.model.add(pupil);

      const glint = roundedBlock(0.04, 0.05, 0.02, 0.012, glintMaterial);
      glint.position.set(this.pupilBaseX[index] - 0.02, 0.12, 0.665);
      glint.castShadow = false;
      this.model.add(glint);
    });

    const mouthCurve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-0.1, -0.16, 0.585),
      new THREE.Vector3(0, -0.22, 0.6),
      new THREE.Vector3(0.1, -0.16, 0.585),
    );
    this.model.add(new THREE.Mesh(
      new THREE.TubeGeometry(mouthCurve, 12, 0.016, 7, false),
      dark,
    ));

    this.leftWing = createInsectWing(-1, wingMaterial);
    this.rightWing = createInsectWing(1, wingMaterial);
    this.leftWing.position.set(-0.34, 0.24, -0.31);
    this.rightWing.position.set(0.34, 0.24, -0.31);
    this.leftWing.rotation.set(WING_TILT_X, 0, -0.38);
    this.rightWing.rotation.set(WING_TILT_X, 0, 0.38);
    this.model.add(this.leftWing, this.rightWing);

    const legGeometry = new RoundedBoxGeometry(0.1, 0.3, 0.1, 3, 0.035);
    [-1, 1].forEach((side) => {
      [-0.35, -0.05, 0.24].forEach((z, row) => {
        const leg = new THREE.Mesh(legGeometry, dark);
        leg.position.set(side * (0.29 + row * 0.03), -0.48, z);
        const baseRotation = side * -0.16;
        leg.rotation.z = baseRotation;
        leg.userData.side = side;
        leg.userData.row = row;
        leg.userData.baseRotation = baseRotation;
        this.legs.push(leg);
        this.model.add(leg);
      });
    });

    this.model.scale.setScalar(0.34);
  }
}
