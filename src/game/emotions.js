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
 },

 emotionsKindIdle: {
  // 1. Легкая улыбка (Базовая радость)
  kind_smile_gentle: {
   brows: { y: [0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.25,
    scaleY: 0.4,
    y: 0.02
   }
  },

  // 2. Радостный взгляд влево
  kind_look_left: {
   eyes: { x: [-0.06, -0.06] },
   brows: { x: [-0.03, -0.03], y: [0.02, 0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.2,
    scaleY: 0.35,
    x: -0.01,
    y: 0.01
   }
  },

  // 3. Радостный взгляд вправо
  kind_look_right: {
   eyes: { x: [0.06, 0.06] },
   brows: { x: [0.03, 0.03], y: [0.02, 0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.2,
    scaleY: 0.35,
    x: 0.01,
    y: 0.01
   }
  },

  // 4. Довольное прищуривание
  kind_squint_happy: {
   eyes: { scaleY: [-0.2, -0.2] },
   brows: { y: [0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.3,
    scaleY: 0.5,
    y: 0.02
   }
  },

  // 5. Легкое удивление-радость
  kind_surprised_joy: {
   bodyRotate: -0.03,
   eyes: { scaleY: [0.08, 0.08] },
   brows: { y: [0.08, 0.08] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.28,
    scaleY: 0.45,
    y: 0.02
   }
  },

  // 6. Счастливое дыхание
  kind_breathe_happy: {
   bodyRotate: 0.02,
   brows: { y: [0.02, 0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.22,
    scaleY: 0.38,
    y: 0.01
   }
  },

  // 7. Радостный наклон влево
  kind_tilt_left: {
   bodyRotate: -0.08,
   eyes: { x: [-0.04, -0.04] },
   brows: { x: [-0.02, -0.02], y: [0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.24,
    scaleY: 0.42,
    x: -0.01,
    y: 0.02
   }
  },

  // 8. Радостный наклон вправо
  kind_tilt_right: {
   bodyRotate: 0.08,
   eyes: { x: [0.04, 0.04] },
   brows: { x: [0.02, 0.02], y: [0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.24,
    scaleY: 0.42,
    x: 0.01,
    y: 0.02
   }
  },

  // 9. Довольное расслабление
  kind_chill_happy: {
   eyes: { scaleY: [-0.1, -0.1] },
   brows: { y: [0.04, 0.04], rotation: [0.05, -0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.26,
    scaleY: 0.4,
    y: 0.02
   }
  },

  // 10. Легкая радостная усталость
  kind_tired_happy: {
   bodyRotate: 0.03,
   eyes: { scaleY: [-0.15, -0.15] },
   brows: { y: [0.02, 0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.23,
    scaleY: 0.38,
    y: 0.01
   }
  },

  // 11. Широкая улыбка
  kind_big_smile: {
   brows: { y: [0.06, 0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.35,
    scaleY: 0.55,
    y: 0.03
   }
  },

  // 12. Радостная фокусировка
  kind_focus_happy: {
   eyes: { scaleY: [-0.12, -0.12] },
   brows: { y: [0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.27,
    scaleY: 0.43,
    y: 0.02
   }
  },

  // 13. Счастливое подмигивание (левый глаз)
  kind_wink_left: {
   eyes: { scaleY: [-0.7, 0], x: [-0.05, -0.05] },
   brows: { y: [0.04, 0.04] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.28,
    scaleY: 0.45,
    x: -0.01,
    y: 0.02
   }
  },

  // 14. Счастливое подмигивание (правый глаз)
  kind_wink_right: {
   eyes: { scaleY: [0, -0.7], x: [0.05, 0.05] },
   brows: { y: [0.04, 0.04] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.28,
    scaleY: 0.45,
    x: 0.01,
    y: 0.02
   }
  },

  // 15. Радостный взгляд вверх
  kind_look_up: {
   eyes: { y: [0.05, 0.05] },
   brows: { y: [0.06, 0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.26,
    scaleY: 0.42,
    y: 0.03
   }
  },

  // 16. Радостный взгляд вниз
  kind_look_down: {
   eyes: { y: [-0.03, -0.03] },
   brows: { y: [0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.25,
    scaleY: 0.4,
    y: 0.01
   }
  },

  // 17. Довольная гордость
  kind_proud: {
   bodyRotate: 0.05,
   brows: { y: [0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.27,
    scaleY: 0.43,
    y: 0.04
   }
  },

  // 18. Радостное оживление
  kind_alert_happy: {
   bodyRotate: -0.04,
   eyes: { scaleY: [0.06, 0.06], scaleX: [0.05, 0.05] },
   brows: { y: [0.07, 0.07] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.29,
    scaleY: 0.46,
    y: 0.02
   }
  },

  // 19. Мягкая радость
  kind_soft_joy: {
   eyes: { scaleY: [-0.08, -0.08] },
   brows: { y: [0.02, 0.02], rotation: [-0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.22,
    scaleY: 0.36,
    y: 0.01
   }
  },

  // 20. Радостная задумчивость
  kind_thoughtful_happy: {
   bodyRotate: 0.04,
   brows: { y: [0.03, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.24,
    scaleY: 0.4,
    rotationX: 0.05,
    y: 0.02
   }
  },

  // 21. Счастливое любопытство
  kind_curious_happy: {
   eyes: { x: [0.05, 0.05], scaleY: [0.04, 0.04] },
   brows: { y: [0.06, 0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.26,
    scaleY: 0.42,
    y: 0.02
   }
  },

  // 22. Радостное согласие
  kind_nod_happy: {
   bodyRotate: 0.06,
   brows: { y: [0.04, 0.04] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.25,
    scaleY: 0.41,
    y: 0.02
   }
  },

  // 23. Довольная улыбка с прищуром
  kind_squint_smile: {
   eyes: { scaleY: [-0.25, -0.25] },
   brows: { y: [0.06, 0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.32,
    scaleY: 0.52,
    y: 0.03
   }
  },

  // 24. Радостная легкость
  kind_light_happy: {
   bodyRotate: -0.02,
   eyes: { scaleY: [0.03, 0.03] },
   brows: { y: [0.03, 0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.23,
    scaleY: 0.39,
    y: 0.01
   }
  },

  // 25. Счастливое умиление
  kind_tender: {
   eyes: { scaleY: [-0.18, -0.18] },
   brows: { y: [0.04, 0.04], rotation: [0.08, -0.08] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.26,
    scaleY: 0.4,
    y: 0.02
   }
  },

  // 26. Радостная бодрость
  kind_energetic: {
   bodyRotate: -0.05,
   eyes: { scaleY: [0.05, 0.05], scaleX: [0.03, 0.03] },
   brows: { y: [0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.27,
    scaleY: 0.44,
    y: 0.02
   }
  },

  // 27. Довольное спокойствие
  kind_peaceful: {
   eyes: { scaleY: [-0.05, -0.05] },
   brows: { y: [0.02, 0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.24,
    scaleY: 0.38,
    y: 0.01
   }
  },

  // 28. Радостная заинтересованность
  kind_interested: {
   eyes: { scaleY: [0.07, 0.07] },
   brows: { y: [0.06, 0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.28,
    scaleY: 0.45,
    y: 0.02
   }
  },

  // 29. Счастливая уверенность
  kind_confident: {
   bodyRotate: 0.04,
   brows: { y: [0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.29,
    scaleY: 0.47,
    y: 0.02
   }
  },

  // 30. Радостная нежность
  kind_gentle_joy: {
   eyes: { scaleY: [-0.12, -0.12] },
   brows: { y: [0.03, 0.03], rotation: [0.06, -0.06] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: 0.25,
    scaleY: 0.41,
    y: 0.02
   }
  }
 },

 emotionsAngryIdle: {
  // 1. Легкое недовольство (Базовая злость)
  angry_slight_frown: {
   brows: { y: [-0.03, -0.03] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.2,
    scaleY: -0.15,
    y: -0.05,
    rotationZ: 0.1
   }
  },

  // 2. Раздраженный взгляд влево
  angry_look_left: {
   eyes: { x: [-0.06, -0.06], scaleY: [-0.05, -0.05] },
   brows: { x: [-0.03, -0.03], y: [-0.02, -0.02], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04,
    x: -0.01,
    rotationZ: 0.08
   }
  },

  // 3. Раздраженный взгляд вправо
  angry_look_right: {
   eyes: { x: [0.06, 0.06], scaleY: [-0.05, -0.05] },
   brows: { x: [0.03, 0.03], y: [-0.02, -0.02], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04,
    x: 0.01,
    rotationZ: -0.08
   }
  },

  // 4. Недовольное прищуривание
  angry_squint: {
   eyes: { scaleY: [-0.2, -0.2] },
   brows: { y: [-0.05, -0.05], rotation: [-0.2, 0.2] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.25,
    scaleY: -0.2,
    y: -0.06,
    rotationZ: 0.15
   }
  },

  // 5. Легкое раздражение
  angry_irritated: {
   bodyRotate: -0.03,
   eyes: { scaleY: [-0.08, -0.08] },
   brows: { y: [-0.04, -0.04], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05,
    rotationZ: 0.1
   }
  },

  // 6. Недовольное дыхание
  angry_breathe: {
   bodyRotate: 0.02,
   brows: { y: [-0.02, -0.02] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04
   }
  },

  // 7. Раздраженный наклон влево
  angry_tilt_left: {
   bodyRotate: -0.08,
   eyes: { x: [-0.04, -0.04], scaleY: [-0.05, -0.05] },
   brows: { x: [-0.02, -0.02], y: [-0.03, -0.03], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05,
    x: -0.01,
    rotationZ: 0.1
   }
  },

  // 8. Раздраженный наклон вправо
  angry_tilt_right: {
   bodyRotate: 0.08,
   eyes: { x: [0.04, 0.04], scaleY: [-0.05, -0.05] },
   brows: { x: [0.02, 0.02], y: [-0.03, -0.03], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05,
    x: 0.01,
    rotationZ: -0.1
   }
  },

  // 9. Недовольное расслабление
  angry_chill: {
   eyes: { scaleY: [-0.12, -0.12] },
   brows: { y: [-0.04, -0.04], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.19,
    scaleY: -0.16,
    y: -0.05
   }
  },

  // 10. Легкая злая усталость
  angry_tired: {
   bodyRotate: 0.03,
   eyes: { scaleY: [-0.18, -0.18] },
   brows: { y: [-0.03, -0.03], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.2,
    scaleY: -0.17,
    y: -0.06
   }
  },

  // 11. Хмурое выражение
  angry_frown: {
   brows: { y: [-0.06, -0.06], rotation: [-0.2, 0.2] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.3,
    scaleY: -0.25,
    y: -0.08,
    rotationZ: 0.2
   }
  },

  // 12. Раздраженная фокусировка
  angry_focus: {
   eyes: { scaleY: [-0.15, -0.15] },
   brows: { y: [-0.05, -0.05], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.2,
    scaleY: -0.17,
    y: -0.06,
    rotationZ: 0.12
   }
  },

  // 13. Недовольное подмигивание (левый глаз)
  angry_wink_left: {
   eyes: { scaleY: [-0.7, 0], x: [-0.05, -0.05] },
   brows: { y: [-0.04, -0.04], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05,
    x: -0.01,
    rotationZ: 0.1
   }
  },

  // 14. Недовольное подмигивание (правый глаз)
  angry_wink_right: {
   eyes: { scaleY: [0, -0.7], x: [0.05, 0.05] },
   brows: { y: [-0.04, -0.04], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05,
    x: 0.01,
    rotationZ: -0.1
   }
  },

  // 15. Раздраженный взгляд вверх
  angry_look_up: {
   eyes: { y: [0.05, 0.05], scaleY: [-0.05, -0.05] },
   brows: { y: [-0.02, -0.02], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.04
   }
  },

  // 16. Раздраженный взгляд вниз
  angry_look_down: {
   eyes: { y: [-0.03, -0.03], scaleY: [-0.08, -0.08] },
   brows: { y: [-0.04, -0.04], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.2,
    scaleY: -0.17,
    y: -0.07
   }
  },

  // 17. Недовольная гордость
  angry_proud: {
   bodyRotate: 0.05,
   brows: { y: [-0.05, -0.05], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.19,
    scaleY: -0.16,
    y: -0.05,
    rotationZ: 0.1
   }
  },

  // 18. Раздраженное оживление
  angry_alert: {
   bodyRotate: -0.04,
   eyes: { scaleY: [-0.06, -0.06], scaleX: [0.02, 0.02] },
   brows: { y: [-0.05, -0.05], rotation: [-0.2, 0.2] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.22,
    scaleY: -0.18,
    y: -0.06,
    rotationZ: 0.15
   }
  },

  // 19. Мягкое недовольство
  angry_soft: {
   eyes: { scaleY: [-0.1, -0.1] },
   brows: { y: [-0.02, -0.02], rotation: [-0.08, 0.08] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04
   }
  },

  // 20. Раздраженная задумчивость
  angry_thoughtful: {
   bodyRotate: 0.04,
   brows: { y: [-0.03, -0.05], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.06,
    rotationX: -0.05,
    rotationZ: 0.1
   }
  },

  // 21. Недовольное любопытство
  angry_curious: {
   eyes: { x: [0.05, 0.05], scaleY: [-0.06, -0.06] },
   brows: { y: [-0.04, -0.04], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05
   }
  },

  // 22. Раздраженное согласие
  angry_nod: {
   bodyRotate: 0.06,
   brows: { y: [-0.04, -0.04], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05
   }
  },

  // 23. Недовольная улыбка с прищуром
  angry_squint_frown: {
   eyes: { scaleY: [-0.25, -0.25] },
   brows: { y: [-0.06, -0.06], rotation: [-0.25, 0.25] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.28,
    scaleY: -0.22,
    y: -0.08,
    rotationZ: 0.2
   }
  },

  // 24. Раздраженная легкость
  angry_light: {
   bodyRotate: -0.02,
   eyes: { scaleY: [-0.05, -0.05] },
   brows: { y: [-0.03, -0.03], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04
   }
  },

  // 25. Недовольное умиление
  angry_tender: {
   eyes: { scaleY: [-0.15, -0.15] },
   brows: { y: [-0.04, -0.04], rotation: [-0.12, 0.12] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05
   }
  },

  // 26. Раздраженная бодрость
  angry_energetic: {
   bodyRotate: -0.05,
   eyes: { scaleY: [-0.08, -0.08], scaleX: [0.02, 0.02] },
   brows: { y: [-0.05, -0.05], rotation: [-0.2, 0.2] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.21,
    scaleY: -0.18,
    y: -0.06,
    rotationZ: 0.12
   }
  },

  // 27. Недовольное спокойствие
  angry_peaceful: {
   eyes: { scaleY: [-0.08, -0.08] },
   brows: { y: [-0.02, -0.02], rotation: [-0.05, 0.05] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.15,
    scaleY: -0.12,
    y: -0.04
   }
  },

  // 28. Раздраженная заинтересованность
  angry_interested: {
   eyes: { scaleY: [-0.1, -0.1] },
   brows: { y: [-0.04, -0.04], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05
   }
  },

  // 29. Недовольная уверенность
  angry_confident: {
   bodyRotate: 0.04,
   brows: { y: [-0.05, -0.05], rotation: [-0.15, 0.15] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.19,
    scaleY: -0.16,
    y: -0.05,
    rotationZ: 0.1
   }
  },

  // 30. Раздраженная нежность
  angry_gentle: {
   eyes: { scaleY: [-0.12, -0.12] },
   brows: { y: [-0.03, -0.03], rotation: [-0.1, 0.1] },
   mouth: {
    thetaLength: Math.PI,
    scaleX: -0.18,
    scaleY: -0.15,
    y: -0.05
   }
  }
 }
}