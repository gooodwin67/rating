import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import gsap from "gsap";
import { getRandomNumber } from "../utils/functions";


export class CharactersClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;

    this.characterGroup = new THREE.Group();

    this.leftEye;
    this.rightEye;
    this.leftBrow;
    this.rightBrow;
    this.mouth;
    this.leftCheek;
    this.rightCheek;

    this.faceZ = 0.62;

    this.bodyMat = new THREE.MeshStandardMaterial({ color: 0x8EE4AF, roughness: 0.9 });
    this.body = new THREE.Mesh(new RoundedBoxGeometry(1.5, 4.2, 1.2, 8, 0.3), this.bodyMat);

    this.blackMat = new THREE.MeshPhongMaterial({ color: 0x734C3A });

    this.params = {

      bodyRotate: 0.3,

      leftEyeX: -0.4, leftEyeY: 1.2, leftEyeScaleX: 1, leftEyeScaleY: 1,
      rightEyeX: 0.4, rightEyeY: 1.2, rightEyeScaleX: 1, rightEyeScaleY: 1,

      leftBrowX: -0.4, leftBrowY: 1.5, leftBrowRotate: 0,
      rightBrowX: 0.4, rightBrowY: 1.5, rightBrowRotate: 0,

      mouthX: 0, mouthY: 0.8, mouthScale: 0, mouthRotate: Math.PI,

      color: '#8EE4AF'
    };

    this.emotions = {
      // sleepy: {
      //   leftEyeScaleY: 0.1,
      //   rightEyeScaleY: 0.1,
      
      //   leftBrowRotate: 0.2,
      //   rightBrowRotate: -0.2,
      
      //   mouthRotate: Math.PI * 1.2,
      //   mouthScale: 0.5,
      
      //   bodyRotate: -0.2
      // },
      angry: {
        leftEyeScaleY: 0.7,
        rightEyeScaleY: 0.7,
        leftBrowRotate: 0.5,
        rightBrowRotate: -0.5,
        mouthRotate: Math.PI * 0.8
      },
      smirk: {
        leftBrowRotate: -0.3,
        rightBrowRotate: 0.3,
        mouthRotate: Math.PI * 0.9,
        bodyRotate: 0.15
      },
      surprised: {
        leftEyeScaleY: 1.3,
        rightEyeScaleY: 1.3,
        leftBrowY: 1.65,
        rightBrowY: 1.65,
        mouthRotate: Math.PI * 2,
        mouthScale: 1.3
      },
      happy: {
        leftBrowY: 1.6,
        rightBrowY: 1.6,
        mouthScale: 1,
        mouthRotate: Math.PI * 1.1
      },
      lookLeft: {
        leftEyeX: -0.5,
        rightEyeX: 0.3,
        leftEyeY: 1.2,
        rightEyeY: 1.2,
        leftBrowX: -0.5,
        rightBrowX: 0.3,
        leftBrowY: 1.5,
        rightBrowY: 1.5,

        bodyRotate: -0.3,
      },
      lookRight: {
        leftEyeX: -0.3,
        rightEyeX: 0.5,
        leftEyeY: 1.2,
        rightEyeY: 1.2,
        leftBrowX: -0.3,
        rightBrowX: 0.5,
        leftBrowY: 1.5,
        rightBrowY: 1.5,

        bodyRotate: 0.3,
      },
      lookTop: {
        leftEyeY: 1.3,
        rightEyeY: 1.3,
        leftBrowY: 1.6,
        rightBrowY: 1.6,

        bodyRotate: 0,

      },
      // clear: {
      //   leftEyeX: 100,
      //   rightEyeX: 100,
      //   leftBrowX: 100,
      //   rightBrowX: 100,
      //   mouthX: 100,
      // }
    }
    

    setInterval(() => {
      this.setEmotion()
    }, 1500);

    setInterval(() => {
      this.blink();
    }, getRandomNumber(2000, 5000));

  }

  blink() {
    gsap.to([this.leftEye.scale, this.rightEye.scale], {
      duration: 0.1,
      y: 0.01,
      yoyo: true,
      repeat: 1,
      ease: "power1.inOut",
    });
  }

  setEmotion = () => {

    const target = Object.values(this.emotions)[Math.round(getRandomNumber(0, 7))];
    // const target = Object.values(this.emotions)[0];

    if (!target) return;



    // GSAP анимация значений объекта params
    gsap.to(this.params, {
      duration: 1.2,
      ease: "back.out(1.7)", // Эффект пружинки в конце
      ...target,
      onUpdate: () => {
        this.updateCharacterVisuals();
      }
    });
    
  };

  loadCharacters() {

    this.scene.add(this.characterGroup);


    this.body.castShadow = true;
    this.body.receiveShadow = true;

    this.characterGroup.add(this.body);



    const pinkMat = new THREE.MeshBasicMaterial({ color: 0xFF9999, transparent: true, opacity: 0.7 });


    const eyeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 32);
    eyeGeo.rotateX(Math.PI / 2);

    this.leftEye = new THREE.Mesh(eyeGeo, this.blackMat);
    this.characterGroup.add(this.leftEye);
    this.rightEye = this.leftEye.clone();
    this.characterGroup.add(this.rightEye);


    const browGeo = new THREE.TorusGeometry(0.08, 0.025, 16, 30, Math.PI / 1.1);

    this.leftBrow = new THREE.Mesh(browGeo, this.blackMat);
    this.characterGroup.add(this.leftBrow);
    this.rightBrow = new THREE.Mesh(browGeo, this.blackMat);
    this.characterGroup.add(this.rightBrow);

    const mouthGeo = new THREE.TorusGeometry(0.08, 0.025, 16, 30, Math.PI / 1);

    this.mouth = new THREE.Mesh(mouthGeo, this.blackMat);
    this.characterGroup.add(this.mouth);


    const cheekGeo = new THREE.SphereGeometry(0.18, 32, 16);
    cheekGeo.scale(1, 0.6, 0.2);

    this.leftCheek = new THREE.Mesh(cheekGeo, pinkMat);
    this.characterGroup.add(this.leftCheek);
    this.rightCheek = new THREE.Mesh(cheekGeo, pinkMat);
    this.characterGroup.add(this.rightCheek);


    this.updateCharacterVisuals();

    gsap.to(this.characterGroup.scale, {
      duration: 2,
      y: "+=0.03",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  updateCharacterVisuals() {
    // Тело
    this.characterGroup.rotation.y = this.params.bodyRotate;

    // Глаза
    this.leftEye.position.set(this.params.leftEyeX, this.params.leftEyeY, this.faceZ);
    this.rightEye.position.set(this.params.rightEyeX, this.params.rightEyeY, this.faceZ);
    this.leftEye.scale.set(1, this.params.leftEyeScaleY, 1);
    this.rightEye.scale.set(1, this.params.rightEyeScaleY, 1);

    // Брови
    this.leftBrow.position.set(this.params.leftBrowX, this.params.leftBrowY, this.faceZ);
    this.rightBrow.position.set(this.params.rightBrowX, this.params.rightBrowY, this.faceZ);

    this.leftBrow.rotation.z = this.params.leftBrowRotate;
    this.rightBrow.rotation.z = this.params.rightBrowRotate;

    //Рот
    this.mouth.position.set(this.params.mouthX, this.params.mouthY, this.faceZ);
    this.mouth.rotation.z = this.params.mouthRotate;

    // Щеки
    this.leftCheek.position.set(-0.50, 0.9, this.faceZ);
    this.rightCheek.position.set(0.50, 0.9, this.faceZ);

    // Цвет
    this.body.material.color.set(this.params.color);

  }




}



















