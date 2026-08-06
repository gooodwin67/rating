import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import gsap from 'gsap';

import { FACE_DEFAULTS, MOUTH_GEOMETRY_KEYS } from './emotions-data';
import { getRandomNumber } from '../utils/functions';

const deepClone = (value) => JSON.parse(JSON.stringify(value));

function createOvalShape(width, height) {
  const shape = new THREE.Shape();
  shape.absellipse(0, 0, width / 2, height / 2, 0, Math.PI * 2, false, 0);
  return shape;
}

function createCurveBandShape(width, curve, thickness) {
  const halfWidth = Math.max(width / 2, 0.001);
  const halfThickness = Math.max(thickness / 2, 0.001);
  const pointsCount = 24;
  const upper = [];
  const lower = [];

  for (let i = 0; i <= pointsCount; i++) {
    const t = i / pointsCount;
    const x = THREE.MathUtils.lerp(-halfWidth, halfWidth, t);
    const arch = (1 - Math.pow(2 * t - 1, 2)) * curve;
    upper.push(new THREE.Vector2(x, arch + halfThickness));
    lower.push(new THREE.Vector2(x, arch - halfThickness));
  }

  const shape = new THREE.Shape();
  shape.moveTo(upper[0].x, upper[0].y);
  upper.slice(1).forEach((point) => shape.lineTo(point.x, point.y));
  lower.reverse().forEach((point) => shape.lineTo(point.x, point.y));
  shape.closePath();

  return shape;
}

export class CharactersClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;
    this.characterGroup = new THREE.Group();

    this.eyes = [];
    this.eyesBack = [];
    this.brows = [];
    this.cheeks = [];

    this.mouth = null;
    this.body = null;
    this.currentMouthParams = {};

    this.faceZ = 0.62;
    this.heightBody = 4.2;
    this.savedScaleY = 1;
    this.role = 'kind';
    this.lookTarget = null;
    this.lookOffset = new THREE.Vector2();
    this.desiredLookOffset = new THREE.Vector2();
    this._tmpLocalTarget = new THREE.Vector3();
    this.blinkFactor = 1;

    this.defaults = deepClone(FACE_DEFAULTS);
    this.params = deepClone(FACE_DEFAULTS);

    this.bodyMat = new THREE.MeshStandardMaterial({ color: 0x8EE4AF, roughness: 0.52, metalness: 0.04 });
    this.blackMat = new THREE.MeshStandardMaterial({ color: 0x734c3a, side: THREE.DoubleSide });
    this.eyeMat = new THREE.MeshStandardMaterial({
      color: 0x734c3a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1,
    });

    this.blinkTween = null;
    this.idleMotionTween = null;
  }

  async loadCharacter(config) {
    this.role = config.role;
    this.savedScaleY = config.scaleY ?? 1;

    this.scene.add(this.characterGroup);
    this.characterGroup.position.x = config.positionX ?? 0;

    this.body = new THREE.Mesh(
      new RoundedBoxGeometry(1.6, this.heightBody * this.savedScaleY, 1.2, 8, 0.3),
      this.bodyMat,
    );
    this.body.position.y = (this.heightBody * this.savedScaleY) / 2 - 2.2;
    this.body.material.color.set(config.color ?? this.defaults.color);
    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.characterGroup.add(this.body);

    const pinkMat = new THREE.MeshBasicMaterial({ color: 0xff9999, transparent: true, opacity: 0.7 });

    const eyeGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.05, 32);
    eyeGeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 2; i++) {
      const eye = new THREE.Mesh(eyeGeo, this.eyeMat);
      this.characterGroup.add(eye);
      this.eyes.push(eye);
    }

    const eyeBackGeo = new THREE.CylinderGeometry(0.3, 0.12, 0.05, 32);
    eyeBackGeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 2; i++) {
      const eyeBack = new THREE.Mesh(
        eyeBackGeo,
        new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4 }),
      );
      this.characterGroup.add(eyeBack);
      this.eyesBack.push(eyeBack);
    }

    const browGeo = new THREE.TorusGeometry(0.08, 0.025, 16, 30, Math.PI / 1.1);
    for (let i = 0; i < 2; i++) {
      const brow = new THREE.Mesh(browGeo, this.blackMat);
      this.characterGroup.add(brow);
      this.brows.push(brow);
    }

    this.updateMouthGeometry(this.defaults.mouth);

    const cheekGeo = new THREE.SphereGeometry(0.18, 32, 16);
    cheekGeo.scale(1, 0.6, 0.2);
    for (let i = 0; i < 2; i++) {
      const cheek = new THREE.Mesh(cheekGeo, pinkMat);
      this.characterGroup.add(cheek);
      this.cheeks.push(cheek);
    }

    this.updateCharacterVisuals();
    this.startIdleMotion(config.idleMotionRange);
  }

  setLookTarget(worldPosition) {
    this.lookTarget = worldPosition ? worldPosition.clone() : null;
  }

  clearLookTarget() {
    this.lookTarget = null;
  }

  update(delta = 1 / 60) {
    if (this.lookTarget) {
      this._tmpLocalTarget.copy(this.lookTarget);
      this.characterGroup.worldToLocal(this._tmpLocalTarget);

      const minLookX = this.role === 'coward' ? -0.2 : -0.12;
      const desiredX = THREE.MathUtils.clamp(this._tmpLocalTarget.x * 0.07, minLookX, 0.12);
      const desiredY = THREE.MathUtils.clamp((this._tmpLocalTarget.y - 1.2) * 0.08, -0.12, 0.12);
      this.desiredLookOffset.set(desiredX, desiredY);
    } else {
      this.desiredLookOffset.set(0, 0);
    }

    const smoothing = Math.min(1, delta * 6);
    this.lookOffset.lerp(this.desiredLookOffset, smoothing);
    this.updateCharacterVisuals();
  }

  startIdleMotion(idleMotionRange = [1.7, 2.3]) {
    this.idleMotionTween?.kill();
    this.characterGroup.scale.set(1, 1, 1);
    this.idleMotionTween = gsap.to(this.characterGroup.scale, {
      duration: getRandomNumber(idleMotionRange[0], idleMotionRange[1]),
      y: '+=0.03',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  applyState(targetParams, options = {}) {
    const duration = options.duration ?? 1.1;
    const ease = options.ease ?? 'back.out(1.7)';

    gsap.to(this.params, {
      bodyRotate: targetParams.bodyRotate,
      duration,
      ease,
      onUpdate: () => this.updateCharacterVisuals(),
    });

    const nextBodyColor = targetParams.color ?? `#${this.body.material.color.getHexString()}`;
    const colorTarget = new THREE.Color(nextBodyColor);
    gsap.to(this.body.material.color, {
      r: colorTarget.r,
      g: colorTarget.g,
      b: colorTarget.b,
      duration,
      ease: 'sine.out',
    });

    ['eyes', 'eyesBack', 'brows', 'cheeks'].forEach((part) => {
      Object.keys(targetParams[part]).forEach((prop) => {
        gsap.to(this.params[part][prop], {
          0: targetParams[part][prop][0],
          1: targetParams[part][prop][1],
          duration,
          ease,
          onUpdate: () => this.updateCharacterVisuals(),
        });
      });
    });

    const mouthTargets = {};
    ['x', 'y', 'scaleX', 'scaleY', 'rotationX', 'rotationY', 'rotationZ', ...MOUTH_GEOMETRY_KEYS.filter((key) => key !== 'mode')].forEach((key) => {
      mouthTargets[key] = targetParams.mouth[key];
    });

    if (targetParams.mouth.mode !== this.params.mouth.mode) {
      this.params.mouth.mode = targetParams.mouth.mode;
    }

    gsap.to(this.params.mouth, {
      ...mouthTargets,
      duration,
      ease,
      onUpdate: () => {
        this.updateMouthGeometry(this.params.mouth);
        this.updateCharacterVisuals();
      },
    });
  }

  updateMouthGeometry(newParams) {
    let needsUpdate = false;
    for (const key of MOUTH_GEOMETRY_KEYS) {
      if (this.currentMouthParams[key] !== newParams[key]) {
        needsUpdate = true;
        break;
      }
    }

    if (!needsUpdate && this.mouth) return;

    if (this.mouth?.geometry) {
      this.mouth.geometry.dispose();
    }

    let shape;
    switch (newParams.mode) {
      case 'oval':
        shape = createOvalShape(newParams.width, newParams.height);
        break;
      case 'curve':
      default:
        shape = createCurveBandShape(
          newParams.width,
          newParams.curve || 0,
          newParams.thickness || 0.02,
        );
        break;
    }

    const geometry = new THREE.ShapeGeometry(shape, 24);
    geometry.center();

    if (this.mouth) {
      this.mouth.geometry = geometry;
    } else {
      this.mouth = new THREE.Mesh(geometry, this.blackMat);
      this.characterGroup.add(this.mouth);
    }

    this.currentMouthParams = { ...newParams };
  }

  blink() {
    if (this.eyes.length < 2) return;
    this.blinkTween?.kill();

    const faceScale = Math.max(this.savedScaleY || 1, 0.65);
    const blinkObj = { val: 1 * faceScale };

    this.blinkTween = gsap.to(blinkObj, {
      val: 0.1 * faceScale,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
      onUpdate: () => {
        this.blinkFactor = blinkObj.val;
        this.updateCharacterVisuals();

        this.eyes.forEach((eye, i) => {
          const normalizedVal = blinkObj.val / faceScale;
          eye.material.opacity = normalizedVal > 0.7 ? 1 : 0;
        });
      },
      onComplete: () => {
        this.blinkFactor = 1;
        this.updateCharacterVisuals();
        this.eyes.forEach((eye) => {
          eye.material.opacity = 1;
        });
      },
    });
  }

  updateCharacterVisuals() {
    const s = this.savedScaleY || 1;
    const bodyY = (this.heightBody * s) / 2 - 2.2;
    const faceScale = Math.max(s, 0.65);
    const defaultTop = 2.1;
    const currentTop = (this.heightBody * s) / 2;

    const getFaceY = (defaultParamY) => {
      const distFromTop = defaultTop - defaultParamY;
      return bodyY + currentTop - distFromTop * faceScale;
    };

    this.characterGroup.rotation.y = this.params.bodyRotate;

    for (let i = 0; i < 2; i++) {
      this.eyes[i].position.set(
        (this.params.eyes.x[i] + this.lookOffset.x) * faceScale,
        getFaceY(this.params.eyes.y[i] + this.lookOffset.y),
        this.faceZ,
      );
      this.eyes[i].scale.set(
        this.params.eyes.scaleX[i] * faceScale,
        this.params.eyes.scaleY[i] * faceScale,
        1,
      );

      this.eyesBack[i].position.set(
        (this.params.eyesBack.x[i] + this.lookOffset.x * 0.35) * faceScale,
        getFaceY(this.params.eyesBack.y[i] + this.lookOffset.y * 0.35) + 0.02,
        this.faceZ - 0.01,
      );
      this.eyesBack[i].scale.set(
        this.params.eyesBack.scaleX[i] * faceScale,
        this.params.eyesBack.scaleY[i] * faceScale * this.blinkFactor,
        1,
      );

      this.brows[i].position.set(
        this.params.brows.x[i] * faceScale,
        getFaceY(this.params.brows.y[i]),
        this.faceZ,
      );
      this.brows[i].rotation.z = this.params.brows.rotation[i];
      this.brows[i].scale.set(
        this.params.brows.scaleX[i] * faceScale,
        this.params.brows.scaleY[i] * faceScale,
        1,
      );

      this.cheeks[i].position.set(
        this.params.cheeks.x[i] * faceScale * 1.1,
        getFaceY(this.params.cheeks.y[i]),
        this.faceZ,
      );
      this.cheeks[i].scale.set(
        this.params.cheeks.scaleX[i] * faceScale,
        this.params.cheeks.scaleY[i] * 0.6 * faceScale,
        0.2,
      );

      if (this.cheeks[i].material.opacity !== undefined) {
        this.cheeks[i].material.opacity = this.params.cheeks.opacity[i];
      }
    }

    if (!this.mouth) return;

    this.mouth.position.set(
      this.params.mouth.x,
      getFaceY(this.params.mouth.y),
      this.faceZ,
    );
    this.mouth.rotation.x = this.params.mouth.rotationX;
    this.mouth.rotation.y = this.params.mouth.rotationY;
    this.mouth.rotation.z = this.params.mouth.rotationZ;
    this.mouth.scale.set(
      this.params.mouth.scaleX * faceScale,
      this.params.mouth.scaleY * faceScale,
      1,
    );
  }
}
