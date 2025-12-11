import * as THREE from "three";
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import gsap from "gsap";
import { getRandomNumber } from "../utils/functions";

export class CharactersClass {
  constructor(gameContext) {
    this.scene = gameContext.scene;
    this.gui = gameContext.gui;

    this.characterGroup = new THREE.Group();

    this.eyes = [];
    this.brows = [];
    this.cheeks = [];

    this.mouth = null;

    // Храним текущие параметры геометрии
    this.currentMouthParams = {};

    this.faceZ = 0.62;

    this.bodyMat = new THREE.MeshStandardMaterial({ color: 0x8EE4AF, roughness: 0.9 });

    this.body = null;
    this.heightBody = 4.2;

    this.blackMat = new THREE.MeshStandardMaterial({ color: 0x734C3A, side: THREE.DoubleSide });

    // --- ПАРАМЕТРЫ (БАЗОВЫЕ / НЕЙТРАЛЬНЫЕ) ---
    this.defaults = {
      bodyRotate: 0,
      color: '#8EE4AF',

      eyes: {
        x: [-0.4, 0.4],
        y: [1.2, 1.2],
        scaleX: [1, 1],
        scaleY: [1, 1],
      },
      brows: {
        x: [-0.4, 0.4],
        y: [1.5, 1.5],
        rotation: [0, 0]
      },
      cheeks: {
        x: [-0.50, 0.50],
        y: [0.9, 0.9],
        scaleX: [1, 1],
        scaleY: [2, 2],
        opacity: [0.4, 0.4]
      },

      // --- РОТ ---
      mouth: {
        // Трансформации (Relative offsets)
        x: 0,
        y: 0.6,
        scaleX: -0.1,
        scaleY: 1.101,
        rotationX: -Math.PI / 2,
        rotationZ: -Math.PI / 2,

        // Геометрия (Absolute values)
        radiusTop: 0.1,
        radiusBottom: 0.12,
        height: 0.05,
        radialSegments: 12,
        heightSegments: 1,
        openEnded: false,
        thetaStart: 0,
        thetaLength: 2.9,
      }

    };

    // Сохраняем "чистую" копию нейтрального состояния для вычисления разницы (deltas)
    this.initialDefaults = JSON.parse(JSON.stringify(this.defaults));

    // Параметры, которые анимируются в реальном времени
    this.params = JSON.parse(JSON.stringify(this.defaults));

    // --- ЭМОЦИИ ---

    this.emotionsSmile = {
      neutral: { mouth: {} },
      // 1. Легкая улыбка (Friendly)
      // Простое доброе выражение лица
      smile: {
        brows: { y: [0.05, 0.05] }, // Чуть приподняты
        mouth: {
          thetaLength: Math.PI,    // Полукруг
          scaleX: 0.2,             // Чуть шире дефолта
          scaleY: 0.5,             // Делаем потолще
        }
      },

      // 2. Радость / Смех (Laughing)
      // Глаза прищурены, рот широко открыт
      laugh: {
        bodyRotate: 0.1,
        eyes: { scaleY: [-0.8, -0.8] }, // Глаза-щелочки (сплюснуты)
        brows: { y: [0.2, 0.2] },
        mouth: {
          thetaLength: Math.PI,
          scaleX: 0.5, // Широкий рот
          scaleY: 1.0, // Высокий рот
        }
      },

      // 3. Восторг (Excited)
      // Широко открытые глаза, широкая улыбка
      excited: {
        bodyRotate: -0.2, // Активный наклон
        eyes: { scaleY: [0.3, 0.3], scaleX: [0.2, 0.2] }, // Огромные глаза
        brows: { y: [0.3, 0.3] }, // Брови высоко
        mouth: {
          thetaLength: Math.PI,
          scaleX: 0.6,
          scaleY: 1.2, // Очень широко открытый рот
          openEnded: false // Залитый (зубы/язык)
        }
      },
      // 4. Довольный / Гордый (Proud)
      // Глаза закрыты от удовольствия, нос кверху
      proud: {
        bodyRotate: 0,
        eyes: { scaleY: [-0.85, -0.85] }, // Закрытые глаза
        brows: { y: [0.2, 0.2] },
        mouth: {
          thetaLength: Math.PI,
          scaleX: 0.4,
          scaleY: 0.4,
          y: 0.1 // Рот чуть выше (подбородок вверх)
        }
      },


      // angry: {
      //   bodyRotate: -0.1,
      //   eyes: { x: [0.1, -0.1], scaleY: [0.2, 0.3] },
      //   brows: { x: [0.1, -0.1], y: [-0.1, -0.1], rotation: [-0.5, 0.5] },
      //   mouth: {
      //     //rotation: Math.PI / 2,
      //     scaleY: 0.5,
      //     scaleX: 0.5,
      //     y: -0.1,
      //     thetaLength: Math.PI
      //   }
      // },
      // surprised: {
      //   eyes: { scaleY: [0.2, 0.2] },
      //   brows: { y: [0.2, 0.2] },
      //   mouth: {
      //     thetaLength: Math.PI * 2,
      //     scaleX: 0.5,
      //     scaleY: 0.5,
      //     //rotation: 0,
      //     openEnded: true
      //   }
      // },
      // happy: {
      //   brows: { y: [0.1, 0.1] },
      //   mouth: {
      //     thetaLength: Math.PI,
      //     //rotation: Math.PI / 2,
      //     scaleX: 1.2,
      //     scaleY: 1.5,
      //     openEnded: false
      //   }
      // },
      // whistle: {
      //   mouth: {
      //     radiusTop: 0.05,
      //     radiusBottom: 0.2,
      //     height: 0.2,
      //     openEnded: true,
      //     rotation: Math.PI / 2,
      //     scaleX: 1, scaleY: 1
      //   }
      // }
    }
    this.emotionsIdle = {
      // 1. Дыхание (База)
      // Едва заметное изменение масштаба, имитация вдоха
      idle_breathe: {
        bodyRotate: 0.02,
        mouth: { scaleX: 0.05, scaleY: 0.02 } // Чуть-чуть "дышит" ртом
      },

      // 2. Взгляд влево
      // Только глаза и немного брови
      idle_left: {
        eyes: { x: [-0.08, -0.08] },
        brows: { x: [-0.05, -0.05] },
        mouth: { x: -0.02 } // Рот микроскопически следует за взглядом
      },

      // 3. Взгляд вправо
      idle_right: {
        eyes: { x: [0.08, 0.08] },
        brows: { x: [0.05, 0.05] },
        mouth: { x: 0.02 }
      },

      // 4. Легкий прищур (Фокусировка)
      // Глаза чуть уже по вертикали
      idle_focus: {
        eyes: { scaleY: [-0.15, -0.15] },
        brows: { y: [-0.05, -0.05] }, // Брови чуть ниже
        mouth: { scaleX: -0.1 } // Рот чуть собран
      },

      // 5. Легкое удивление (Alert)
      // Глаза чуть шире, брови чуть выше
      idle_alert: {
        bodyRotate: -0.05,
        eyes: { scaleY: [0.1, 0.1] },
        brows: { y: [0.1, 0.1] },
        mouth: { scaleY: -0.1 } // Рот чуть приоткрыт/сплюснут
      },

      // 6. Скепсис / Раздумье
      // Одна бровь выше другой
      idle_hm: {
        bodyRotate: 0.05,
        brows: { y: [0.0, 0.15] }, // Правая бровь чуть выше
        mouth: { rotationX: 0.1 } // Едва заметный наклон рта
      },

      // 7. Расслабление (Chill)
      // Брови чуть разъезжаются, глаза расслаблены
      idle_chill: {
        eyes: { scaleY: [-0.05, -0.05] },
        brows: { rotation: [0.1, -0.1] }, // Чуть "домиком" наоборот (расслаблены)
        mouth: { scaleX: 0.05 }
      },

      // 8. Микро-наклон (Tilt)
      // Просто изменение позы тела
      idle_tilt: {
        bodyRotate: -0.15,
        eyes: { x: [0.02, 0.02] }, // Компенсация взгляда
      },

      // 9. Легкая грусть/Усталость
      // Все чуть-чуть вниз
      idle_low: {
        bodyRotate: 0.05,
        brows: { y: [-0.05, -0.05], rotation: [-0.1, 0.1] },
        mouth: { y: -0.05 }
      },

      // 10. Проверка (Check)
      // Глаза бегают (чуть уже и в сторону)
      idle_check: {
        eyes: { x: [0.05, 0.05], scaleY: [-0.1, -0.1] },
        brows: { y: [0.05, 0.05] },
        mouth: { scaleX: -0.15 } // Рот трубочкой
      }
    };



    this.emotions = this.emotionsIdle;

    this.setupGui();

    // Закомментировал авто-смену эмоций, чтобы они не мешали настройке в GUI
    // setInterval(() => {
    //   //   // const list = ['angry', 'surprised', 'happy', 'neutral', 'whistle'];
    //   const list = ['neutral'];
    //   const rand = list[Math.floor(Math.random() * list.length)];
    //   this.setEmotion(rand);
    // }, 2000);

    setInterval(() => {
      const list = Object.keys(this.emotions); // Берет все доступные эмоции
      const rand = list[Math.floor(Math.random() * list.length)];
      // const rand = list[9];
      this.setEmotion(rand);
      console.log("Current Emotion:", rand); // Чтобы видеть в консоли, что играет
    }, getRandomNumber(1500, 4000));

    setInterval(() => { this.blink(); }, getRandomNumber(2000, 4000));
  }



  // --- УНИВЕРСАЛЬНЫЙ МЕТОД СОЗДАНИЯ ГЕОМЕТРИИ ---
  updateMouthGeometry(newParams) {
    const keysToCheck = ['radiusTop', 'radiusBottom', 'height', 'radialSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength'];

    let needsUpdate = false;
    for (const key of keysToCheck) {
      if (this.currentMouthParams[key] !== newParams[key]) {
        needsUpdate = true;
        break;
      }
    }

    if (!needsUpdate && this.mouth) return;

    if (this.mouth && this.mouth.geometry) {
      this.mouth.geometry.dispose();
    }

    const geometry = new THREE.CylinderGeometry(
      newParams.radiusTop,
      newParams.radiusBottom,
      newParams.height,
      newParams.radialSegments,
      newParams.heightSegments,
      newParams.openEnded,
      newParams.thetaStart,
      newParams.thetaLength
    );

    geometry.rotateX(Math.PI / 2);
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
    const blinkObj = { val: 1 };
    gsap.to(blinkObj, {
      val: 0.1, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut",
      onUpdate: () => {
        this.eyes.forEach((eye, i) => {
          eye.scale.setY(this.params.eyes.scaleY[i] * blinkObj.val);
        });
      }
    });
  }

  setEmotion = (emotionName = 'neutral') => {
    const offsets = this.emotions[emotionName] || {};

    // --- 1. Сборка параметров РТА ---
    const mouthDefaults = this.defaults.mouth;
    const mouthOffsets = offsets.mouth || {};

    const targetMouthParams = { ...mouthDefaults };

    if (mouthOffsets.shape === 'half') targetMouthParams.thetaLength = Math.PI;
    if (mouthOffsets.shape === 'full') targetMouthParams.thetaLength = Math.PI * 2;
    if (mouthOffsets.open !== undefined) targetMouthParams.openEnded = mouthOffsets.open;

    const geoKeys = ['radiusTop', 'radiusBottom', 'height', 'radialSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength'];
    geoKeys.forEach(key => {
      if (mouthOffsets[key] !== undefined) {
        targetMouthParams[key] = mouthOffsets[key];
      }
    });

    this.updateMouthGeometry(targetMouthParams);

    // --- 2. GSAP Анимация ---
    const duration = 1.2;
    const ease = "back.out(1.7)";

    const getTarget = (base, offset) => {
      if (offset === undefined) return base;
      if (typeof base === 'string') return offset;
      return base + offset;
    };

    ['bodyRotate', 'color'].forEach(key => {
      const targetVal = getTarget(this.defaults[key], offsets[key]);
      gsap.to(this.params, { [key]: targetVal, duration, ease });
    });

    ['eyes', 'brows', 'cheeks'].forEach(part => {
      Object.keys(this.defaults[part]).forEach(prop => {
        const defaultArr = this.defaults[part][prop];
        const offsetArr = offsets[part] && offsets[part][prop] ? offsets[part][prop] : [0, 0];

        gsap.to(this.params[part][prop], {
          0: defaultArr[0] + offsetArr[0],
          1: defaultArr[1] + offsetArr[1],
          duration, ease,
          onUpdate: () => this.updateCharacterVisuals()
        });
      });
    });

    if (this.defaults.mouth) {
      const mDef = this.defaults.mouth;
      const mOff = offsets.mouth || {};
      const mouthTarget = {};

      const transformKeys = ['x', 'y', 'scaleX', 'scaleY', 'rotationX', 'rotationY'];
      transformKeys.forEach(key => {
        mouthTarget[key] = mDef[key] + (mOff[key] || 0);
      });

      gsap.to(this.params.mouth, {
        ...mouthTarget,
        duration, ease,
        onUpdate: () => this.updateCharacterVisuals()
      });
    }
  };

  loadCharacters(color = this.defaults.color, scaleY = 1) {
    this.scene.add(this.characterGroup);

    this.savedScaleY = scaleY;

    this.body = new THREE.Mesh(new RoundedBoxGeometry(1.5, this.heightBody * scaleY, 1.2, 8, 0.3), this.bodyMat);
    this.body.position.y = this.heightBody * scaleY / 2 - 2.2;

    this.body.material.color.set(color);
    // this.body.scale.y = scaleY;

    this.body.castShadow = true;
    this.body.receiveShadow = true;
    this.characterGroup.add(this.body);

    const pinkMat = new THREE.MeshBasicMaterial({ color: 0xFF9999, transparent: true, opacity: 0.7 });

    const eyeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.05, 32);
    eyeGeo.rotateX(Math.PI / 2);
    for (let i = 0; i < 2; i++) {
      const eye = new THREE.Mesh(eyeGeo, this.blackMat);
      this.characterGroup.add(eye);
      this.eyes.push(eye);
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
    gsap.to(this.characterGroup.scale, { duration: getRandomNumber(1.7, 2.3), y: "+=0.03", repeat: -1, yoyo: true, ease: "sine.inOut" });
  }

  updateCharacterVisuals(scaleY) {
    // 1. Определяем реальный масштаб (или берем сохраненный)
    const s = this.savedScaleY || 1;

    // 2. Рассчитываем центр тела в мире (как в loadCharacters)
    const bodyY = (this.heightBody * s) / 2 - 2.2;

    // 3. --- ГЛАВНАЯ МАГИЯ ---
    // faceScale: не даем лицу стать меньше 65% от оригинала, даже если тело 30% (0.3).
    // Это сохранит глаза и рот крупными и читаемыми на маленьких персонажах.
    const faceScale = Math.max(s, 0.65);

    // defaultTop: Где макушка у базового персонажа (высота 4.2 / 2 = 2.1)
    const defaultTop = 2.1;

    // currentTop: Где макушка сейчас (относительно центра тела)
    const currentTop = (this.heightBody * s) / 2;

    // Хелпер: считает позицию Y, отступая от макушки, а не от центра
    const getFaceY = (defaultParamY) => {
      const distFromTop = defaultTop - defaultParamY; // Насколько далеко от верха в оригинале
      // Отступаем от ТЕКУЩЕЙ макушки, но расстояние сжимаем не сильно (faceScale)
      return bodyY + currentTop - (distFromTop * faceScale);
    };
    // ------------------------

    this.characterGroup.rotation.y = this.params.bodyRotate;

    for (let i = 0; i < 2; i++) {
      // Глаза
      this.eyes[i].position.set(
        this.params.eyes.x[i] * faceScale, // X можно не трогать или умножать на faceScale для ширины
        getFaceY(this.params.eyes.y[i]),
        this.faceZ
      );
      // Масштаб самих глаз тоже берем от faceScale, чтобы они не были точками
      this.eyes[i].scale.set(
        this.params.eyes.scaleX[i] * faceScale,
        this.params.eyes.scaleY[i] * faceScale,
        1
      );

      // Брови
      this.brows[i].position.set(
        this.params.brows.x[i] * faceScale,
        getFaceY(this.params.brows.y[i]),
        this.faceZ
      );
      this.brows[i].rotation.z = this.params.brows.rotation[i];

      // Щеки
      this.cheeks[i].position.set(
        this.params.cheeks.x[i] * (faceScale * 1.1),
        getFaceY(this.params.cheeks.y[i]),
        this.faceZ
      );
      this.cheeks[i].scale.set(
        this.params.cheeks.scaleX[i] * faceScale,
        this.params.cheeks.scaleY[i] * 0.6 * faceScale,
        0.2
      );

      if (this.cheeks[i].material.opacity !== undefined) {
        this.cheeks[i].material.opacity = this.params.cheeks.opacity[i];
      }
    }

    // Рот
    if (this.mouth) {
      this.mouth.position.set(
        this.params.mouth.x,
        getFaceY(this.params.mouth.y),
        this.faceZ
      );
      this.mouth.rotation.x = this.params.mouth.rotationX;
      this.mouth.rotation.z = this.params.mouth.rotationZ;
      // Рот тоже не должен схлопываться в точку
      this.mouth.scale.set(
        this.params.mouth.scaleX * faceScale,
        this.params.mouth.scaleY * faceScale,
        1
      );
    }
  }

  // --- SETUP GUI ---
  setupGui() {
    if (!this.gui) return;

    // Срабатывает при любом изменении любого ползунка
    const onGuiChange = () => {
      // 1. Применяем изменения из GUI (this.defaults) в визуальные параметры (this.params)
      this.applyGuiToParams();
      // 2. Обновляем 3D сцену
      this.updateCharacterVisuals();
      // 3. Выводим код в консоль
      this.logChanges();
    };

    const onMouthGeoChange = () => {
      this.applyGuiToParams(); // копируем значения
      this.updateMouthGeometry(this.params.mouth); // обновляем геометрию
      this.logChanges();
    };

    // Группа: Персонаж
    const personFolder = this.gui.addFolder('Person');
    personFolder.add(this.defaults, 'bodyRotate', -3, 3).onChange(onGuiChange);
    personFolder.addColor(this.defaults, 'color').onChange(onGuiChange);

    // Группа: Парные части (Глаза, Брови, Щеки)
    const createPairFolder = (name, partObj) => {
      const folder = this.gui.addFolder(name);

      folder.add(partObj.x, '0', -1, 0).name('Left X').onChange(onGuiChange);
      folder.add(partObj.x, '1', 0, 1).name('Right X').onChange(onGuiChange);

      folder.add(partObj.y, '0', 0, 3).name('Left Y').onChange(onGuiChange);
      folder.add(partObj.y, '1', 0, 3).name('Right Y').onChange(onGuiChange);

      if (partObj.rotation) {
        folder.add(partObj.rotation, '0', -3, 3).name('Left Rot').onChange(onGuiChange);
        folder.add(partObj.rotation, '1', -3, 3).name('Right Rot').onChange(onGuiChange);
      }

      if (partObj.scaleX) {
        folder.add(partObj.scaleX, '0', 0, 3).name('L Scale X').onChange(onGuiChange);
        folder.add(partObj.scaleX, '1', 0, 3).name('R Scale X').onChange(onGuiChange);
        folder.add(partObj.scaleY, '0', 0, 3).name('L Scale Y').onChange(onGuiChange);
        folder.add(partObj.scaleY, '1', 0, 3).name('R Scale Y').onChange(onGuiChange);
      } else if (partObj.scale) {
        folder.add(partObj.scale, '0', 0, 3).name('L Scale').onChange(onGuiChange);
        folder.add(partObj.scale, '1', 0, 3).name('R Scale').onChange(onGuiChange);
      }

      if (partObj.opacity) {
        folder.add(partObj.opacity, '0', 0, 1).name('L Opacity').onChange(onGuiChange);
        folder.add(partObj.opacity, '1', 0, 1).name('R Opacity').onChange(onGuiChange);
      }
    };

    createPairFolder('Eyes', this.defaults.eyes);
    createPairFolder('Brows', this.defaults.brows);
    createPairFolder('Cheeks', this.defaults.cheeks);

    // Группа: Рот (Трансформации)
    const mouthTransFolder = this.gui.addFolder('Mouth Transform');
    mouthTransFolder.add(this.defaults.mouth, 'x', -1, 1).onChange(onGuiChange);
    mouthTransFolder.add(this.defaults.mouth, 'y', 0, 2).onChange(onGuiChange);
    mouthTransFolder.add(this.defaults.mouth, 'scaleX', 0, 3).onChange(onGuiChange);
    mouthTransFolder.add(this.defaults.mouth, 'scaleY', 0, 3).onChange(onGuiChange);
    mouthTransFolder.add(this.defaults.mouth, 'rotationX', -Math.PI, Math.PI).onChange(onGuiChange);
    mouthTransFolder.add(this.defaults.mouth, 'rotationZ', -Math.PI, Math.PI).onChange(onGuiChange);

    // Группа: Рот (Геометрия)
    const mouthGeoFolder = this.gui.addFolder('Mouth Geometry');
    mouthGeoFolder.add(this.defaults.mouth, 'radiusTop', 0, 1).onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'radiusBottom', 0, 1).onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'height', 0.01, 1).onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'radialSegments', 3, 64, 1).onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'openEnded').onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'thetaStart', 0, Math.PI * 2).onChange(onMouthGeoChange);
    mouthGeoFolder.add(this.defaults.mouth, 'thetaLength', 0, Math.PI * 2).onChange(onMouthGeoChange);
  }

  applyGuiToParams() {
    // Копируем массивы
    ['eyes', 'brows', 'cheeks'].forEach(part => {
      Object.keys(this.defaults[part]).forEach(key => {
        if (this.params[part][key]) {
          this.params[part][key][0] = this.defaults[part][key][0];
          this.params[part][key][1] = this.defaults[part][key][1];
        }
      });
    });
    // Копируем рот
    Object.keys(this.defaults.mouth).forEach(key => {
      this.params.mouth[key] = this.defaults.mouth[key];
    });
    // Прочее
    this.params.bodyRotate = this.defaults.bodyRotate;
    this.params.color = this.defaults.color;
  }
  // --- ЛОГИРОВАНИЕ ИЗМЕНЕНИЙ ---
  logChanges() {
    const output = {};
    const r = (num) => Math.round(num * 1000) / 1000; // Округление до 3 знаков

    // 1. Body Rotate (Считаем разницу)
    const bodyRotDiff = this.defaults.bodyRotate - this.initialDefaults.bodyRotate;
    if (Math.abs(bodyRotDiff) > 0.001) output.bodyRotate = r(bodyRotDiff);

    // 2. Массивы (Eyes, Brows, Cheeks) - Считаем разницу
    ['eyes', 'brows', 'cheeks'].forEach(part => {
      const partObj = {};
      let hasChange = false;

      Object.keys(this.defaults[part]).forEach(prop => {
        const current = this.defaults[part][prop];
        const initial = this.initialDefaults[part][prop];

        // Для массивов [left, right]
        if (Array.isArray(current) && Array.isArray(initial)) {
          const d0 = current[0] - initial[0];
          const d1 = current[1] - initial[1];

          if (Math.abs(d0) > 0.001 || Math.abs(d1) > 0.001) {
            partObj[prop] = [r(d0), r(d1)];
            hasChange = true;
          }
        }
      });
      if (hasChange) output[part] = partObj;
    });

    // 3. Рот
    const mouthObj = {};
    let mouthHasChange = false;
    const mCurr = this.defaults.mouth;
    const mInit = this.initialDefaults.mouth;

    // А. Трансформации (Считаем разницу/Offset, так как setEmotion прибавляет их)
    ['x', 'y', 'scaleX', 'scaleY', 'rotationX', 'rotationZ'].forEach(key => {
      const diff = mCurr[key] - mInit[key];
      if (Math.abs(diff) > 0.001) {
        mouthObj[key] = r(diff);
        mouthHasChange = true;
      }
    });

    // Б. Геометрия (Берем Абсолютные значения, так как setEmotion заменяет их)
    ['radiusTop', 'radiusBottom', 'height', 'radialSegments', 'heightSegments', 'openEnded', 'thetaStart', 'thetaLength'].forEach(key => {
      if (mCurr[key] !== mInit[key]) {
        mouthObj[key] = (typeof mCurr[key] === 'number') ? r(mCurr[key]) : mCurr[key];
        mouthHasChange = true;
      }
    });

    if (mouthHasChange) output.mouth = mouthObj;

    // Выводим в консоль только если есть изменения
    if (Object.keys(output).length > 0) {
      // Очищаем консоль, чтобы не спамить (по желанию можно убрать console.clear())
      console.clear();
      console.log("✂️ Copy this object to 'this.emotions':");
      console.log(output);
    }
  }
}