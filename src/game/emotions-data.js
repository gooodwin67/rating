const deepClone = (value) => JSON.parse(JSON.stringify(value));

export const FACE_DEFAULTS = {
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
    scaleX: [1, 1],
    scaleY: [1, 1],
    rotation: [0, 0],
  },
  cheeks: {
    x: [-0.5, 0.5],
    y: [0.8, 0.8],
    scaleX: [1, 1],
    scaleY: [2, 2],
    opacity: [0.4, 0.4],
  },
  mouth: {
    x: 0,
    y: 0.58,
    scaleX: 1,
    scaleY: 1,
    rotationX: 0,
    rotationY: 0,
    rotationZ: 0,
    mode: 'curve',
    width: 0.16,
    height: 0.03,
    thickness: 0.02,
    curve: 0,
  },
};

export const LOOK_PRESETS = {
  center: {},
  left: {
    eyes: { x: [-0.12, -0.12] },
  },
  right: {
    eyes: { x: [0.12, 0.12] },
  },
  top: {
    eyes: { y: [0.12, 0.12] },
  },
  bottom: {
    eyes: { y: [-0.12, -0.12] },
  },
};

const MOUTH_PRESETS = {
  neutral: { mode: 'curve', y: -0.02, width: 0.08, thickness: 0.012, curve: 0, height: 0.012 },
  smileSoft: { mode: 'curve', y: -0.06, width: 0.2, thickness: 0.022, curve: -0.04, height: 0.06 },
  smileWide: { mode: 'curve', y: -0.06, width: 0.25, thickness: 0.026, curve: -0.06, height: 0.08 },
  grin: { mode: 'curve', y: -0.05, width: 0.3, thickness: 0.03, curve: -0.08, height: 0.1 },
  openSmall: { mode: 'oval', y: -0.08, width: 0.07, height: 0.1 },
  openMedium: { mode: 'oval', y: -0.1, width: 0.09, height: 0.14 },
  openBig: { mode: 'oval', y: -0.12, width: 0.12, height: 0.19 },
  frownSoft: { mode: 'curve', y: -0.1, width: 0.18, thickness: 0.02, curve: 0.035, height: 0.05 },
  frownDeep: { mode: 'curve', y: -0.12, width: 0.23, thickness: 0.024, curve: 0.05, height: 0.07 },
  tense: { mode: 'curve', y: -0.08, width: 0.12, thickness: 0.012, curve: 0.004, height: 0.015 },
  puzzled: { mode: 'curve', y: -0.07, width: 0.08, thickness: 0.014, curve: 0.012, height: 0.02 },
};

const ROLE_BASE_POSES = {
  angry: {
    eyes: { x: [0.052, -0.052], y: [-0.012, -0.012] },
    mouth: { ...MOUTH_PRESETS.tense },
    brows: {
      x: [0.2, -0.2],
      y: [-0.05, -0.05],
      scaleY: [-0.5, -0.5],
      rotation: [-0.5, 0.5],
    },
  },
  kind: {
    eyes: { x: [-0.072, -0.072], y: [-0.052, -0.052] },
    mouth: { ...MOUTH_PRESETS.smileSoft },
    brows: {
      x: [-0.2, 0.2],
      y: [-0.05, -0.05],
      scaleY: [-0.5, -0.5],
      rotation: [0.5, -0.5],
    },
  },
  silly: {
    eyes: { x: [-0.07, 0.06], y: [-0.082, 0.032] },
    mouth: { ...MOUTH_PRESETS.smileSoft },
    brows: {
      y: [0.03, 0.17],
      scaleY: [-0.5, -0.5],
      rotation: [0.1, -0.5],
    },
  },
  coward: {
    eyes: { x: [0.077, 0.07], y: [-0.052, -0.052] },
    mouth: { ...MOUTH_PRESETS.neutral },
    brows: {
      x: [0, 0],
      y: [0.08, 0.05],
      scaleY: [-0.5, -0.5],
      rotation: [0.5, -0.5],
    },
  },
};

const ROLE_STATE_POSES = {
  angry: {
    idle: {},
    watching: {
      eyes: { scaleY: [-0.08, -0.08] },
      brows: { y: [0.04, 0.04] },
    },
    anticipation: {
      bodyRotate: 0.06,
      eyes: { scaleX: [0.12, 0.12], scaleY: [0.08, 0.08] },
      brows: { y: [0.08, 0.08] },
      mouth: { ...MOUTH_PRESETS.tense, y: -0.06 },
    },
    approve: {
      bodyRotate: 0.16,
      eyes: { scaleY: [-0.12, -0.12] },
      brows: { y: [0.12, 0.12], rotation: [-0.2, 0.2] },
      mouth: { ...MOUTH_PRESETS.smileSoft },
    },
    disapprove: {
      bodyRotate: -0.18,
      eyes: { scaleY: [0.14, 0.14] },
      brows: { y: [0.12, 0.12], rotation: [-0.5, 0.5] },
      mouth: { ...MOUTH_PRESETS.frownSoft },
    },
    surprised: {
      eyesBack: { scaleX: [0.25, 0.25], scaleY: [0.2, 0.2] },
      eyes: { scaleX: [0.22, 0.22], scaleY: [0.22, 0.22], y: [0.08, 0.08] },
      brows: { y: [0.24, 0.24] },
      mouth: { ...MOUTH_PRESETS.openMedium },
    },
    confused: {
      bodyRotate: -0.1,
      eyes: { y: [-0.04, 0.04] },
      brows: { rotation: [-0.35, -0.05], y: [0.05, 0.13] },
      mouth: { ...MOUTH_PRESETS.puzzled },
    },
    tense: {
      bodyRotate: -0.08,
      eyes: { scaleY: [-0.16, -0.16] },
      brows: { y: [-0.04, -0.04] },
      mouth: { ...MOUTH_PRESETS.tense },
    },
    celebrate: {
      bodyRotate: 0.18,
      eyes: { scaleY: [-0.9, -0.9] },
      cheeks: { opacity: [0.15, 0.15] },
      brows: { y: [0.15, 0.15], rotation: [-0.1, 0.1] },
      mouth: { ...MOUTH_PRESETS.grin },
    },
    sad: {
      bodyRotate: -0.1,
      eyes: { y: [-0.12, -0.12], scaleY: [-0.12, -0.12] },
      brows: { y: [-0.02, -0.02], rotation: [0.12, -0.12] },
      mouth: { ...MOUTH_PRESETS.frownDeep },
    },
  },
  kind: {
    idle: {},
    watching: {
      eyes: { scaleY: [-0.08, -0.08] },
      mouth: { ...MOUTH_PRESETS.neutral },
    },
    anticipation: {
      bodyRotate: 0.04,
      eyesBack: { scaleX: [0.08, 0.08], scaleY: [0.08, 0.08] },
      brows: { y: [0.08, 0.08] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.02 },
    },
    approve: {
      bodyRotate: 0.12,
      eyes: { scaleY: [-0.2, -0.2] },
      brows: { y: [0.1, 0.1], rotation: [0.15, -0.15] },
      cheeks: { opacity: [0.25, 0.25] },
      mouth: { ...MOUTH_PRESETS.smileWide },
    },
    disapprove: {
      bodyRotate: -0.06,
      eyes: { y: [-0.05, -0.05] },
      brows: { rotation: [-0.1, 0.1], y: [0.02, 0.02] },
      mouth: { ...MOUTH_PRESETS.frownSoft },
    },
    surprised: {
      eyesBack: { scaleX: [0.18, 0.18], scaleY: [0.18, 0.18] },
      eyes: { scaleX: [0.16, 0.16], scaleY: [0.16, 0.16], y: [0.08, 0.08] },
      brows: { y: [0.22, 0.22] },
      mouth: { ...MOUTH_PRESETS.openSmall },
    },
    confused: {
      bodyRotate: 0.06,
      eyes: { y: [0.03, -0.02] },
      brows: { rotation: [0.2, -0.05], y: [0.12, 0.02] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.04 },
    },
    tense: {
      bodyRotate: -0.08,
      eyes: { scaleY: [-0.12, -0.12], y: [0.03, 0.03] },
      brows: { y: [-0.04, -0.04] },
      mouth: { ...MOUTH_PRESETS.tense },
    },
    celebrate: {
      bodyRotate: 0.2,
      eyes: { scaleY: [-0.9, -0.9] },
      brows: { y: [0.18, 0.18], rotation: [0.05, -0.05] },
      cheeks: { opacity: [0.35, 0.35] },
      mouth: { ...MOUTH_PRESETS.grin, y: -0.06 },
    },
    sad: {
      bodyRotate: -0.04,
      eyes: { y: [-0.1, -0.1], scaleY: [-0.1, -0.1] },
      brows: { y: [-0.08, -0.08], rotation: [0.18, -0.18] },
      mouth: { ...MOUTH_PRESETS.frownDeep, y: -0.18 },
    },
  },
  silly: {
    idle: {},
    watching: {
      eyes: { y: [0.03, -0.03] },
      mouth: { ...MOUTH_PRESETS.neutral },
    },
    anticipation: {
      bodyRotate: 0.1,
      eyes: { x: [0.04, -0.05], scaleY: [0.06, 0.06] },
      brows: { y: [0.08, 0.04], rotation: [0.2, -0.2] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.02 },
    },
    approve: {
      bodyRotate: 0.08,
      eyes: { scaleY: [-0.35, -0.35] },
      brows: { y: [0.08, 0.08] },
      mouth: { ...MOUTH_PRESETS.smileSoft, y: -0.04 },
    },
    disapprove: {
      bodyRotate: -0.14,
      eyes: { y: [-0.08, 0.04] },
      brows: { rotation: [-0.25, 0.3], y: [0.02, 0.08] },
      mouth: { ...MOUTH_PRESETS.frownSoft, y: -0.14 },
    },
    surprised: {
      eyesBack: { scaleX: [0.22, 0.22], scaleY: [0.22, 0.22] },
      eyes: { scaleX: [0.2, 0.2], scaleY: [0.22, 0.22], y: [0.08, 0.08] },
      brows: { y: [0.24, 0.18] },
      mouth: { ...MOUTH_PRESETS.openBig, y: -0.08 },
    },
    confused: {
      bodyRotate: 0.12,
      eyes: { x: [-0.06, 0.08], y: [-0.02, 0.05] },
      brows: { rotation: [0.18, -0.38], y: [0.06, 0.14] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.06 },
    },
    tense: {
      bodyRotate: -0.05,
      eyes: { scaleY: [-0.18, -0.18] },
      brows: { y: [-0.06, 0.02] },
      mouth: { ...MOUTH_PRESETS.tense, y: -0.14 },
    },
    celebrate: {
      bodyRotate: 0.22,
      eyes: { scaleY: [-0.95, -0.95] },
      cheeks: { opacity: [0.32, 0.32] },
      brows: { y: [0.1, 0.18], rotation: [0.15, -0.28] },
      mouth: { ...MOUTH_PRESETS.grin, y: -0.02 },
    },
    sad: {
      bodyRotate: -0.16,
      eyes: { y: [-0.1, -0.02] },
      brows: { rotation: [0.22, -0.22], y: [-0.06, -0.02] },
      mouth: { ...MOUTH_PRESETS.frownSoft, y: -0.18 },
    },
  },
  coward: {
    idle: {},
    watching: {
      eyes: { scaleX: [0.06, 0.06], scaleY: [0.05, 0.05] },
      brows: { y: [0.05, 0.05] },
    },
    anticipation: {
      bodyRotate: -0.08,
      eyesBack: { scaleX: [0.08, 0.08], scaleY: [0.08, 0.08] },
      eyes: { y: [0.05, 0.05], scaleX: [0.08, 0.08], scaleY: [0.08, 0.08] },
      brows: { y: [0.12, 0.12] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.03 },
    },
    approve: {
      bodyRotate: 0.04,
      eyes: { scaleY: [-0.08, -0.08] },
      brows: { y: [0.02, 0.02], rotation: [0.08, -0.08] },
      mouth: { ...MOUTH_PRESETS.smileSoft, y: -0.06 },
    },
    disapprove: {
      bodyRotate: -0.12,
      eyes: { y: [-0.1, -0.1] },
      brows: { y: [0.16, 0.16], rotation: [-0.1, 0.1] },
      mouth: { ...MOUTH_PRESETS.frownDeep, y: -0.18 },
    },
    surprised: {
      bodyRotate: -0.12,
      eyesBack: { scaleX: [0.28, 0.28], scaleY: [0.28, 0.28] },
      eyes: { scaleX: [0.24, 0.24], scaleY: [0.24, 0.24], y: [0.12, 0.12] },
      brows: { y: [0.28, 0.24] },
      mouth: { ...MOUTH_PRESETS.openBig },
    },
    confused: {
      bodyRotate: -0.08,
      eyes: { y: [0.04, -0.05] },
      brows: { rotation: [0.3, -0.18], y: [0.18, 0.08] },
      mouth: { ...MOUTH_PRESETS.puzzled, y: -0.1 },
    },
    tense: {
      bodyRotate: -0.18,
      eyesBack: { scaleX: [0.16, 0.16], scaleY: [0.16, 0.16] },
      eyes: { scaleX: [0.16, 0.16], scaleY: [0.12, 0.12], y: [0.06, 0.06] },
      brows: { y: [0.2, 0.2] },
      mouth: { ...MOUTH_PRESETS.tense, y: -0.16 },
    },
    celebrate: {
      bodyRotate: 0.06,
      eyes: { scaleY: [-0.24, -0.24] },
      cheeks: { opacity: [0.22, 0.22] },
      brows: { y: [0.12, 0.12] },
      mouth: { ...MOUTH_PRESETS.smileSoft, y: -0.06 },
    },
    sad: {
      bodyRotate: -0.18,
      eyes: { y: [-0.14, -0.14], scaleY: [-0.18, -0.18] },
      brows: { y: [0.06, 0.06], rotation: [0.24, -0.24] },
      mouth: { ...MOUTH_PRESETS.frownDeep, y: -0.2 },
    },
  },
};

export const SPECTATOR_DEFINITIONS = [
  {
    id: 1,
    role: 'coward',
    label: 'Coward',
    color: '#FEAEAA',
    scaleY: 0.4,
    positionX: -2.7,
    expressiveness: 1.05,
    reactionSpeed: 1.05,
    blinkRange: [2600, 5200],
    idleMotionRange: [1.5, 2.2],
    idleInterval: [7000, 12000],
    ambientInterval: [1800, 3200],
  },
  {
    id: 2,
    role: 'silly',
    label: 'Silly',
    color: '#C0AFED',
    scaleY: 0.6,
    positionX: -0.9,
    expressiveness: 1.1,
    reactionSpeed: 0.95,
    blinkRange: [2400, 4200],
    idleMotionRange: [1.8, 2.4],
    idleInterval: [6000, 10000],
    ambientInterval: [1500, 2800],
  },
  {
    id: 3,
    role: 'kind',
    label: 'Kind',
    color: '#A4E5BD',
    scaleY: 0.8,
    positionX: 0.9,
    expressiveness: 0.95,
    reactionSpeed: 1,
    blinkRange: [3200, 5200],
    idleMotionRange: [1.9, 2.5],
    idleInterval: [8000, 13000],
    ambientInterval: [2000, 3600],
  },
  {
    id: 4,
    role: 'angry',
    label: 'Angry',
    color: '#FCE26E',
    scaleY: 1.1,
    positionX: 2.7,
    expressiveness: 1.15,
    reactionSpeed: 0.9,
    blinkRange: [2200, 4200],
    idleMotionRange: [1.7, 2.3],
    idleInterval: [6500, 11000],
    ambientInterval: [1600, 3000],
  },
];

export const SPECTATOR_PROFILES = {
  angry: {
    role: 'angry',
    basePose: ROLE_BASE_POSES.angry,
    states: ROLE_STATE_POSES.angry,
    idleStates: ['idle'],
    watchingStates: ['watching', 'anticipation', 'tense'],
    reactions: {
      pair_presented: { state: 'watching', duration: 0.9 },
      player_choice: { state: 'disapprove', duration: 1.4 },
      guess_correct: { state: 'surprised', duration: 1.6 },
      guess_wrong: { state: 'approve', duration: 1.7 },
      streak_up: { state: 'tense', duration: 1.5 },
      category_complete: { state: 'celebrate', duration: 1.8 },
      neutral: { state: 'idle', duration: 0.8 },
    },
  },
  kind: {
    role: 'kind',
    basePose: ROLE_BASE_POSES.kind,
    states: ROLE_STATE_POSES.kind,
    idleStates: ['idle'],
    watchingStates: ['watching', 'anticipation', 'approve'],
    reactions: {
      pair_presented: { state: 'watching', duration: 0.8 },
      player_choice: { state: 'approve', duration: 1.4 },
      guess_correct: { state: 'celebrate', duration: 1.7 },
      guess_wrong: { state: 'sad', duration: 1.6 },
      streak_up: { state: 'approve', duration: 1.5 },
      category_complete: { state: 'celebrate', duration: 1.8 },
      neutral: { state: 'idle', duration: 0.8 },
    },
  },
  silly: {
    role: 'silly',
    basePose: ROLE_BASE_POSES.silly,
    states: ROLE_STATE_POSES.silly,
    idleStates: ['idle'],
    watchingStates: ['watching', 'anticipation', 'confused', 'surprised'],
    reactions: {
      pair_presented: { state: 'watching', duration: 0.8 },
      player_choice: { state: 'surprised', duration: 1.3 },
      guess_correct: { state: 'celebrate', duration: 1.9 },
      guess_wrong: { state: 'confused', duration: 1.6 },
      streak_up: { state: 'celebrate', duration: 1.8 },
      category_complete: { state: 'celebrate', duration: 1.8 },
      neutral: { state: 'idle', duration: 0.8 },
    },
  },
  coward: {
    role: 'coward',
    basePose: ROLE_BASE_POSES.coward,
    states: ROLE_STATE_POSES.coward,
    idleStates: ['idle'],
    watchingStates: ['watching', 'anticipation', 'tense', 'confused'],
    reactions: {
      pair_presented: { state: 'tense', duration: 0.9 },
      player_choice: { state: 'tense', duration: 1.4 },
      guess_correct: { state: 'approve', duration: 1.5 },
      guess_wrong: { state: 'sad', duration: 1.8 },
      streak_up: { state: 'surprised', duration: 1.6 },
      category_complete: { state: 'approve', duration: 1.6 },
      neutral: { state: 'idle', duration: 0.8 },
    },
  },
};

export const SPECTATOR_SCENE_EVENTS = [
  'pair_presented',
  'player_choice',
  'guess_correct',
  'guess_wrong',
  'streak_up',
  'category_complete',
  'neutral',
];

export const MOUTH_GEOMETRY_KEYS = [
  'mode',
  'width',
  'height',
  'thickness',
  'curve',
];

export function composeFaceState(...layers) {
  const target = deepClone(FACE_DEFAULTS);

  layers.forEach((layer) => {
    if (!layer) return;

    if (layer.bodyRotate !== undefined) target.bodyRotate += layer.bodyRotate;
    if (layer.color !== undefined) target.color = layer.color;

    ['eyes', 'eyesBack', 'brows', 'cheeks'].forEach((part) => {
      if (!layer[part]) return;

      Object.keys(layer[part]).forEach((prop) => {
        const value = layer[part][prop];
        if (Array.isArray(value) && Array.isArray(target[part][prop])) {
          target[part][prop][0] += value[0];
          target[part][prop][1] += value[1];
        }
      });
    });

    if (!layer.mouth) return;

    ['x', 'y', 'scaleX', 'scaleY', 'rotationX', 'rotationY', 'rotationZ'].forEach((key) => {
      if (layer.mouth[key] !== undefined) {
        target.mouth[key] += layer.mouth[key];
      }
    });

    MOUTH_GEOMETRY_KEYS.forEach((key) => {
      if (layer.mouth[key] !== undefined) {
        target.mouth[key] = layer.mouth[key];
      }
    });
  });

  return target;
}
