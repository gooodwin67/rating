// --- ПАРАМЕТРЫ (БАЗОВЫЕ / НЕЙТРАЛЬНЫЕ) ---
export const EMOTIONS_DEFAULT = {
 bodyRotate: 0,
 color: '#8EE4AF',

 eyesBack: {
  x: [-0.4, 0.4],
  y: [1.2, 1.2],
  scaleX: [1, 1],
  scaleY: [1, 1],
 },

 eyes: {
  x: [-0.4, 0.4],
  y: [1.2, 1.2],
  scaleX: [1, 1],
  scaleY: [1, 1],
 },
 brows: {
  x: [-0.4, 0.4],
  y: [1.6, 1.6],
  rotation: [0, 0]
 },
 cheeks: {
  x: [-0.50, 0.50],
  y: [0.8, 0.8],
  scaleX: [1, 1],
  scaleY: [2, 2],
  opacity: [0.4, 0.4]
 },

 // --- РОТ ---
 mouth: {
  // Трансформации (Relative offsets)
  x: 0,
  y: 0.6,
  scaleX: 1.131,
  scaleY: 1.101,
  rotationX: 0,
  rotationY: 0,
  rotationZ: -1.41,

  // Геометрия (Absolute values)
  radiusTop: 0.1,
  radiusBottom: 0.12,
  height: 0.01,
  radialSegments: 12,
  heightSegments: 1,
  openEnded: false,
  thetaStart: 0,
  thetaLength: 2.9,
 }

};



export const EMOTIONS_DATA = {
 emotionsIdle: {
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

 },



 emotionsSmile: {
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


  angry: {
   bodyRotate: -0.1,
   eyes: { x: [0.1, -0.1], scaleY: [0.2, 0.3] },
   brows: { x: [0.1, -0.1], y: [-0.1, -0.1], rotation: [-0.5, 0.5] },
   mouth: {
    //rotation: Math.PI / 2,
    scaleY: 0.5,
    scaleX: 0.5,
    y: -0.1,
    thetaLength: Math.PI
   }
  },
  surprised: {
   eyes: { scaleY: [0.2, 0.2] },
   brows: { y: [0.2, 0.2] },
   mouth: {
    thetaLength: Math.PI * 2,
    scaleX: 0.5,
    scaleY: 0.5,
    //rotation: 0,
    openEnded: true
   }
  },
  happy: {
   brows: { y: [0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    //rotation: Math.PI / 2,
    scaleX: 1.2,
    scaleY: 1.5,
    openEnded: false
   }
  },
  whistle: {
   mouth: {
    radiusTop: 0.05,
    radiusBottom: 0.2,
    height: 0.2,
    openEnded: true,
    rotation: Math.PI / 2,
    scaleX: 1, scaleY: 1
   }
  }
 }
}