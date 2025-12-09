import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { Operator } from "three/examples/jsm/transpiler/AST.js";

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
      // Глаза
      eyeY: 1.3, eyeScaleY: 1,
      // Брови
      browY: 1.55, browRotOffset: 0, // offset от базы
      // Рот
      mouthY: 1, mouthArc: 2.8, mouthThick: 0.035, mouthScale: 1, mouthRot: 0,
      // Общее
      color: '#8EE4AF'
    };
  }

  loadCharacters() {

    this.scene.add(this.characterGroup);

    // Тело

    this.body.castShadow = true;
    this.body.receiveShadow = true;

    this.characterGroup.add(this.body);



    const pinkMat = new THREE.MeshBasicMaterial({ color: 0xFF9999, transparent: true, opacity: 0.7 });

    // Ссылки на меши


    // Инициализация частей
    const eyeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 32);
    eyeGeo.rotateX(Math.PI / 2);

    this.leftEye = new THREE.Mesh(eyeGeo, this.blackMat);
    this.characterGroup.add(this.leftEye);

    this.rightEye = this.leftEye.clone();
    this.characterGroup.add(this.rightEye);

    const browGeo = new THREE.TorusGeometry(0.08, 0.025, 16, 30, Math.PI / 1.2);
    this.leftBrow = new THREE.Mesh(browGeo, this.blackMat);

    this.characterGroup.add(this.leftBrow);
    this.rightBrow = new THREE.Mesh(browGeo, this.blackMat);
    this.characterGroup.add(this.rightBrow);

    const cheekGeo = new THREE.SphereGeometry(0.18, 32, 16);
    cheekGeo.scale(1, 0.6, 0.2);
    this.leftCheek = new THREE.Mesh(cheekGeo, pinkMat);
    this.characterGroup.add(this.leftCheek);

    this.rightCheek = new THREE.Mesh(cheekGeo, pinkMat);
    this.characterGroup.add(this.rightCheek);




    this.updateCharacterVisuals();


  }

  updateCharacterVisuals() {
    // Глаза
    this.leftEye.position.set(-0.4, this.params.eyeY, this.faceZ);
    this.rightEye.position.set(0.4, this.params.eyeY, this.faceZ);
    this.leftEye.scale.set(1, this.params.eyeScaleY, 1);
    this.rightEye.scale.set(1, this.params.eyeScaleY, 1);

    // Брови (базовый наклон + оффсет эмоции)
    this.leftBrow.position.set(-0.4, this.params.browY, this.faceZ);
    this.rightBrow.position.set(0.4, this.params.browY, this.faceZ);
    // Симметричный поворот
    this.leftBrow.rotation.z = 0.65 + this.params.browRotOffset;
    this.rightBrow.rotation.z = -0.65 - this.params.browRotOffset; // Зеркально

    // Щеки
    this.leftCheek.position.set(-0.50, 0.9, this.faceZ);
    this.rightCheek.position.set(0.50, 0.9, this.faceZ);

    // Цвет
    this.body.material.color.set(this.params.color);

    // Рот обновляем геометрией
    this.updateMouthMesh();
  }

  updateMouthMesh() {
    if (this.mouth) {
      this.mouth.geometry.dispose();
      this.characterGroup.remove(this.mouth);
    }
    const newGeo = new THREE.TorusGeometry(0.15 * this.params.mouthScale, this.params.mouthThick, 16, 60, this.params.mouthArc);

    this.mouth = new THREE.Mesh(newGeo, this.blackMat);
    // Хитрый поворот: 
    // -PI/2 ставит дугу вниз. 
    // -params.mouthArc/2 центрирует её.
    // params.mouthRot позволяет перевернуть улыбку в грусть (PI)
    this.mouth.rotation.z = -Math.PI / 2 - (this.params.mouthArc / 2) + this.params.mouthRot;
    this.mouth.position.set(0, this.params.mouthY, this.faceZ);
    this.characterGroup.add(this.mouth);
  }


}












