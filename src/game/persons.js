import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import gsap from 'gsap';

import { FACE_DEFAULTS, MOUTH_GEOMETRY_KEYS } from './emotions-data';
import { getRandomNumber } from '../utils/functions';

const deepClone = (value) => JSON.parse(JSON.stringify(value));

const SPEECH_EXPRESSION_BY_ROLE = Object.freeze({
  angry: {
    browLift: [-0.025, 0.035],
    browTilt: [0.055, 0.12],
    browAsymmetry: [0.005, 0.035],
    cheekPulse: [0.01, 0.055],
    bodyNod: [0.006, 0.018],
  },
  kind: {
    browLift: [0.045, 0.105],
    browTilt: [0.018, 0.065],
    browAsymmetry: [0.005, 0.025],
    cheekPulse: [0.045, 0.12],
    bodyNod: [0.005, 0.014],
  },
  silly: {
    browLift: [0.015, 0.09],
    browTilt: [0.035, 0.105],
    browAsymmetry: [0.045, 0.105],
    cheekPulse: [0.025, 0.09],
    bodyNod: [0.008, 0.022],
  },
  coward: {
    browLift: [0.065, 0.13],
    browTilt: [0.018, 0.07],
    browAsymmetry: [0.012, 0.045],
    cheekPulse: [0.03, 0.085],
    bodyNod: [0.006, 0.017],
  },
});

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
    this.isSpeaking = false;
    this.speakingTween = null;
    this.speakingExpressionTween = null;
    this.speechRestoreMouth = null;
    this.speakingBaseZ = null;
    this.speechExpression = {
      browLift: 0,
      browTilt: 0,
      browAsymmetry: 0,
      cheekPulse: 0,
      bodyNod: 0,
    };

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

    this.bodyMat = new THREE.MeshStandardMaterial({
      color: 0x8EE4AF,
      roughness: 0.48,
      metalness: 0.04,
      emissive: 0x28105f,
      emissiveIntensity: 0.07,
    });
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
    if (this.isSpeaking) {
      this.desiredLookOffset.set(0, 0);
    } else if (this.lookTarget) {
      this._tmpLocalTarget.copy(this.lookTarget);
      this.characterGroup.worldToLocal(this._tmpLocalTarget);

      // Every pupil uses the same symmetrical travel range. Character scale is
      // applied later together with the sclera, so no role-specific correction
      // is needed here (and the smallest character no longer drifts off-centre).
      const lookRangeX = 0.16;
      const lookRangeY = 0.145;
      const desiredX = THREE.MathUtils.clamp(
        this._tmpLocalTarget.x * 0.09,
        -lookRangeX,
        lookRangeX,
      );
      const desiredY = THREE.MathUtils.clamp(
        (this._tmpLocalTarget.y - 1.2) * 0.09,
        -lookRangeY,
        lookRangeY,
      );
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

    this.speechRestoreMouth = deepClone(targetParams.mouth);
    if (this.isSpeaking) return;

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

  startSpeaking({ tempo = 1 } = {}) {
    this.speakingTween?.kill();
    this.speakingExpressionTween?.kill();
    gsap.killTweensOf(this.params.mouth);
    gsap.killTweensOf(this.speechExpression);

    this.speechRestoreMouth = deepClone(this.speechRestoreMouth || this.params.mouth);

    this.isSpeaking = true;
    this.lookOffset.set(0, 0);
    this.desiredLookOffset.set(0, 0);
    this.speakingBaseZ = this.characterGroup.position.z;
    gsap.killTweensOf(this.characterGroup.position, 'z');
    gsap.to(this.characterGroup.position, {
      z: this.speakingBaseZ + 0.45,
      duration: 0.8,
      ease: 'sine.out',
    });

    this.params.mouth.mode = 'oval';
    this.params.mouth.width = 0.19;
    this.params.mouth.height = 0.045;
    this.updateMouthGeometry(this.params.mouth);
    this.updateCharacterVisuals();

    const animateSyllable = () => {
      if (!this.isSpeaking) return;

      this.speakingTween = gsap.to(this.params.mouth, {
        height: getRandomNumber(0.055, 0.18),
        duration: getRandomNumber(0.07, 0.16) * tempo,
        ease: 'sine.inOut',
        onUpdate: () => {
          this.updateMouthGeometry(this.params.mouth);
          this.updateCharacterVisuals();
        },
        onComplete: () => {
          if (!this.isSpeaking) return;
          this.speakingTween = gsap.to(this.params.mouth, {
            height: getRandomNumber(0.025, 0.065),
            duration: getRandomNumber(0.06, 0.13) * tempo,
            ease: 'sine.inOut',
            onUpdate: () => {
              this.updateMouthGeometry(this.params.mouth);
              this.updateCharacterVisuals();
            },
            onComplete: animateSyllable,
          });
        },
      });
    };

    const expressionRange = SPEECH_EXPRESSION_BY_ROLE[this.role]
      ?? SPEECH_EXPRESSION_BY_ROLE.kind;
    const animateExpression = () => {
      if (!this.isSpeaking) return;

      const direction = Math.random() < 0.5 ? -1 : 1;
      this.speakingExpressionTween = gsap.to(this.speechExpression, {
        browLift: getRandomNumber(...expressionRange.browLift),
        browTilt: getRandomNumber(...expressionRange.browTilt),
        browAsymmetry: getRandomNumber(...expressionRange.browAsymmetry) * direction,
        cheekPulse: getRandomNumber(...expressionRange.cheekPulse),
        bodyNod: getRandomNumber(...expressionRange.bodyNod) * direction,
        duration: getRandomNumber(0.24, 0.46) * Math.min(tempo, 1.7),
        ease: 'sine.inOut',
        onUpdate: () => this.updateCharacterVisuals(),
        onComplete: animateExpression,
      });
    };

    animateSyllable();
    animateExpression();
  }

  stopSpeaking({ immediate = false } = {}) {
    if (!this.isSpeaking) return;

    this.isSpeaking = false;
    this.speakingTween?.kill();
    this.speakingTween = null;
    this.speakingExpressionTween?.kill();
    this.speakingExpressionTween = null;
    gsap.killTweensOf(this.params.mouth);
    gsap.killTweensOf(this.speechExpression);

    const restoreMouth = deepClone(this.speechRestoreMouth || this.defaults.mouth);

    if (immediate) {
      Object.assign(this.speechExpression, {
        browLift: 0,
        browTilt: 0,
        browAsymmetry: 0,
        cheekPulse: 0,
        bodyNod: 0,
      });

      gsap.killTweensOf(this.characterGroup.position, 'z');
      if (this.speakingBaseZ !== null) {
        this.characterGroup.position.z = this.speakingBaseZ;
      }
      this.speakingBaseZ = null;

      Object.assign(this.params.mouth, restoreMouth);
      this.updateMouthGeometry(this.params.mouth);
      this.updateCharacterVisuals();
      return;
    }

    gsap.to(this.speechExpression, {
      browLift: 0,
      browTilt: 0,
      browAsymmetry: 0,
      cheekPulse: 0,
      bodyNod: 0,
      duration: 0.3,
      ease: 'sine.out',
      onUpdate: () => this.updateCharacterVisuals(),
    });

    if (this.speakingBaseZ !== null) {
      gsap.killTweensOf(this.characterGroup.position, 'z');
      gsap.to(this.characterGroup.position, {
        z: this.speakingBaseZ,
        duration: 0.6,
        ease: 'sine.inOut',
      });
      this.speakingBaseZ = null;
    }

    this.params.mouth.mode = restoreMouth.mode;
    this.updateMouthGeometry(this.params.mouth);

    const mouthTargets = {};
    ['x', 'y', 'scaleX', 'scaleY', 'rotationX', 'rotationY', 'rotationZ', ...MOUTH_GEOMETRY_KEYS.filter((key) => key !== 'mode')].forEach((key) => {
      mouthTargets[key] = restoreMouth[key];
    });

    gsap.to(this.params.mouth, {
      ...mouthTargets,
      duration: 0.18,
      ease: 'sine.out',
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
    this.characterGroup.rotation.x = this.speechExpression.bodyNod;
    this.characterGroup.rotation.z = 0;

    for (let i = 0; i < 2; i++) {
      // The sclera is the source of truth for the pupil centre. Previously the
      // role/emotion pupil offsets accumulated independently, which made some
      // characters cross-eyed and gave the two pupils different edge travel.
      this.eyes[i].position.set(
        (this.params.eyesBack.x[i] + this.lookOffset.x) * faceScale,
        getFaceY(this.params.eyesBack.y[i] + this.lookOffset.y) + 0.02,
        this.faceZ,
      );
      this.eyes[i].scale.set(
        this.params.eyes.scaleX[i] * faceScale,
        this.params.eyes.scaleY[i] * faceScale,
        1,
      );

      this.eyesBack[i].position.set(
        this.params.eyesBack.x[i] * faceScale,
        getFaceY(this.params.eyesBack.y[i]) + 0.02,
        this.faceZ - 0.01,
      );
      this.eyesBack[i].scale.set(
        this.params.eyesBack.scaleX[i] * faceScale,
        this.params.eyesBack.scaleY[i] * faceScale * this.blinkFactor,
        1,
      );

      this.brows[i].position.set(
        this.params.brows.x[i] * faceScale,
        getFaceY(
          this.params.brows.y[i]
          + this.speechExpression.browLift
          + this.speechExpression.browAsymmetry * (i === 0 ? 1 : -1),
        ),
        this.faceZ,
      );
      this.brows[i].rotation.z = this.params.brows.rotation[i]
        + this.speechExpression.browTilt * (i === 0 ? 1 : -1);
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
        this.params.cheeks.scaleX[i] * faceScale * (1 + this.speechExpression.cheekPulse),
        this.params.cheeks.scaleY[i] * 0.6 * faceScale * (1 + this.speechExpression.cheekPulse),
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
